import Label from '../../Label'
import Item from '../../Item';
import { colors } from '@helper/index';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CardNews: React.FC = () => {
    return (
        <Item row marginVertical={hp(1)}>
            <Item width={wp(60)}>
                <Label fontSecondary size={16} color={colors.black}>
                    Is it safe to stay at home during coronavirus?</Label>
                <Label fontPrimary color={colors.grey} size={14} >Today</Label>
            </Item>
            <Item width={wp(40)} style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'https://source.unsplash.com/1200x500?healthy' }}
                    style={{ width: wp(30), height: hp(10), borderRadius: wp(5), }} />
            </Item>
        </Item>
    )
}

export default CardNews

const styles = StyleSheet.create({})
