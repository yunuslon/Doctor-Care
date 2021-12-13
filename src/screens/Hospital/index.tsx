import { Item, Label } from '@component/index'
import { colors } from '@helper/index'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CardHospital from './CardHospital';


const Hospital = () => {
    return (
        <Item bg={colors.black} flex={1}>
            <Image source={{ uri: 'https://source.unsplash.com/1200x500?building' }}
                style={{ width: wp(100), height: hp(40) }} />
            <Item horizontalCenter absolute full top={hp(4)}>
                <Label fontSecondary size={24} color={colors.white}>Nearby Hospitals</Label>
                <Label fontPrimary size={20} color={colors.white}>3 tersedia</Label>
            </Item>
            <Item bg={colors.black} flex={1}>
                <ScrollView style={{
                    backgroundColor: colors.white, paddingTop: hp(2),
                    borderRadius: wp(7), marginTop: hp(-5)
                }} showsVerticalScrollIndicator={false}>
                    <CardHospital />
                    <CardHospital />
                    <CardHospital />
                    <CardHospital />
                    <CardHospital />
                </ScrollView>
            </Item>
        </Item>
    )
}

export default Hospital

const styles = StyleSheet.create({})
