import { IconBlue } from '@asset/index';
import { Button, Input, Item, Label } from '@component/index';
import { colors, fonts, showMessage, useForm } from '@helper/index';
import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { auth } from '../../config'
import { RootStackList } from '@nav/RootStackList';
import { useRecoilState } from 'recoil';
import { isLoading } from '@recoil/index';

const Login: React.FC = () => {
    type LoginScreenProp = NativeStackNavigationProp<RootStackList, 'Login'>;
    const [, setLoading] = useRecoilState(isLoading);
    const navigation = useNavigation<LoginScreenProp>();
    const [form, setForm] = useForm({
        email: '',
        password: '',
    })
    const Reset = (loc: string) => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: loc }],
            })
        );
    }
    const onSubmit = () => {
        if (form.email === '' || form.password === '') {
            showMessage('Data tidak boleh kosong!!')
        } else {
            setLoading(true);
            auth().signInWithEmailAndPassword(form.email, form.password).
                then((res) => {
                    console.log('succ', res);
                    showMessage('validate succes', 'success');
                    setLoading(false);
                    Reset('MyTabs');
                }).catch((error) => {
                    setLoading(false);
                    var errorCode = error.code;
                    if (errorCode === 'auth/invalid-email')
                        showMessage('Format email salah!!');
                    if (errorCode === 'auth/user-not-found')
                        showMessage('User tidak ditemukan!!');
                    if (errorCode === 'auth/wrong-password')
                        showMessage('password Salah');
                });
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.white, paddingHorizontal: wp(6) }} showsVerticalScrollIndicator={false} >
            <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
            <Item height={hp(30)} verticalCenter horizontalStart >
                <IconBlue width={wp(25)} height={hp(10)} />
                <Label fontSecondary size={22} color={colors.black}
                    style={{ marginTop: 15 }}>{`Masuk dan mulai\nberkonsultasi`}</Label>
            </Item>
            <Item height={hp(45)} >
                <Input placeholder={'Email Addres'} title={'Email Addres'} mt={15} borderColor={colors.grey} height={9}
                    val={form.email} onChangeText={(val) => setForm('email', val)} font={fonts.regular} color={colors.black}
                    colorAktif={colors.primary} />
                <Input placeholder={'Password'} title={'Password'} mt={15} borderColor={colors.grey} pass height={9}
                    val={form.password} onChangeText={(val) => setForm('password', val)} font={fonts.regular} color={colors.black}
                    colorAktif={colors.primary} />
                <TouchableOpacity>
                    <Label fontSecondary color={colors.grey} size={16}
                        style={{ marginTop: hp(2), textDecorationLine: 'underline' }}>Forget My Password</Label>
                </TouchableOpacity>
            </Item>
            <Item height={hp(20)} >
                <Button primary borderRadius={10} title={'Sign In'} height={hp(8)} onPress={() => onSubmit()} />
                <TouchableOpacity style={{ alignItems: 'center', marginTop: hp(4) }}
                    onPress={() => navigation.navigate('Register')}>
                    <Label fontSecondary size={17} color={colors.grey}
                        style={{ textDecorationLine: 'underline' }}>Create New Account</Label>
                </TouchableOpacity>
            </Item>
        </ScrollView >
    )
}

export default Login
