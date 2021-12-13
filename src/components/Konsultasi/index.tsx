import Label from '../Label'
import Item from '../Item';
import { colors } from '@helper/colors';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '@nav/RootStackList';



const Konsultasi: React.FC = () => {
    type KonsultasiScreenProp = NativeStackNavigationProp<RootStackList, 'Doctor'>;
    const navigation = useNavigation<KonsultasiScreenProp>();

    return (
        <Item>
            <Label fontSecondary size={22} color={colors.black} style={{ marginBottom: hp(4), marginHorizontal: wp(4) }}>
                {`Mau konsultasi dengan\nsiapa hari ini?`}</Label>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: wp(3) }}>
                <Card iconName={'Umum'} title={'dokter Umum'}
                    onPress={() => navigation.navigate('ListDoctor', { titleAppbar: 'Dokter Umum' })} />
                <Card iconName={'Psikiater'} title={'psikiater'}
                    onPress={() => navigation.navigate('ListDoctor', { titleAppbar: 'Psikiater' })} />
                <Card iconName={'Obat'} title={'dokter Obat'}
                    onPress={() => navigation.navigate('ListDoctor', { titleAppbar: 'Dokter Obat' })} />
                <Card iconName={'Obat'} title={'dokter Anak'}
                    onPress={() => navigation.navigate('ListDoctor', { titleAppbar: 'Dokter Anak' })} />
            </ScrollView>
        </Item>
    )
}

export default Konsultasi

const styles = StyleSheet.create({})
