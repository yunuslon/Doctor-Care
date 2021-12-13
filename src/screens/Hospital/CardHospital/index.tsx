import { Item, Label } from '@component/index'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '@helper/index';

const CardHospital = () => {
    return (
        <Item row margin={wp(2)}>
            <Image source={{ uri: 'https://source.unsplash.com/1200x500?building' }}
                style={{ width: wp(32), height: hp(13), borderRadius: wp(4) }} />
            <Item width={wp(55)} marginLeft={wp(2)}>
                <Label fontSecondary size={20} color={colors.black} Lines={2}>
                    Rumah Sakit Citra Bunga Merdeka</Label>
                <Label fontPrimary size={16} color={colors.grey} mt={hp(1)}>Jln. Surya Sejahtera 20</Label>
            </Item>
        </Item>
    )
}

export default CardHospital

const styles = StyleSheet.create({})
