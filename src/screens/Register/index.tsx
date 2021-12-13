import React from 'react';
import { Appbar, Button, Input, Item } from '@component/index';
import { colors, fonts, showMessage, useForm } from '@helper/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '@nav/RootStackList';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Register: React.FC = () => {
    type RegisterScreenProp = NativeStackNavigationProp<RootStackList, 'Register'>;
    const navigation = useNavigation<RegisterScreenProp>();
    const [errEmail, seterrEmail] = React.useState('')
    const [errPass, setErrPass] = React.useState('')
    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    })
    const CreateUser = (eml: string, pass: string) => {
        // auth().createUserWithEmailAndPassword(eml, pass)
        //     .then((res) => {
        //         showMessage('Validate success', 'success');
        //         console.log(res);

        //         // navigation.navigate('UploadPhoto')
        //     })
        //     .catch(error => {
        //         if (error.code === 'auth/email-already-in-use') {
        //             showMessage('That email address is already in use!');
        //         }
        //         if (error.code === 'auth/invalid-email') {
        //             showMessage('That email address is invalid!');
        //         }
        //         console.error(error);
        //     });
    }
    const onsubmit = () => {
        var valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (form.fullName === '' || form.profession === ''
            || form.email === '' || form.password === '') {
            showMessage('Data tidak boleh kosong!!');
        } else if (!valEmail.test(form.email)) {
            showMessage('Format Email salah!!');
            seterrEmail('err');
        } else if (!form.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/)) {
            showMessage('Password harus mengandung Huruf Besar & kecil, minimal 6 karakter');
            setErrPass('err');
            seterrEmail('');
        } else {
            setErrPass('');
            seterrEmail('');
            CreateUser(form.email, form.password)
        }
    };
    return (
        <Item flex={1} bg={colors.white} paddingHorizontal={wp(3)}>
            <Appbar color={colors.black} title={'Daftar Akun'} onPress={() => { navigation.goBack() }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Item marginHorizontal={wp(3)} >
                    <Input placeholder={'Full Name'} title={'Full Name'} mt={15} borderColor={colors.grey} height={9}
                        val={form.fullName} onChangeText={(val) => setForm('fullName', val)} font={fonts.regular}
                        color={colors.black} colorAktif={colors.primary} />
                    <Input placeholder={'Profession'} title={'Profession'} mt={15} borderColor={colors.grey} height={9}
                        val={form.profession} onChangeText={(val) => setForm('profession', val)} font={fonts.regular}
                        color={colors.black} colorAktif={colors.primary} />
                    <Input placeholder={'Email Address'} title={'Email Address'} mt={15} borderColor={errEmail === 'err' ? colors.red : colors.grey}
                        height={9} val={form.email} onChangeText={(val) => setForm('email', val)} font={fonts.regular} color={colors.black}
                        colorAktif={colors.primary} />
                    <Input placeholder={'Password'} title={'Password'} mt={15} borderColor={errPass === 'err' ? colors.red : colors.grey} pass
                        height={9} val={form.password} onChangeText={(val) => setForm('password', val)} font={fonts.regular} color={colors.black}
                        colorAktif={colors.primary} />
                    <Button onPress={() => onsubmit()}
                        primary borderRadius={10} title={'Continue'} height={hp(8)} style={{ marginTop: hp(4) }} />
                </Item>
            </ScrollView>
        </Item>
    )
}

export default Register

