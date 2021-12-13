import { AddPhoto, PhotoNull } from '@asset/index';
import Label from '../Label'
import Item from '../Item';
import { colors } from '@helper/index';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Profile = () => {
    return (
        <Item flex={1} horizontalCenter verticalCenter >
            <Item style={styles.border}>
                <PhotoNull width={wp(40)} height={wp(40)} />
                <TouchableOpacity style={styles.btn}>
                    <AddPhoto width={wp(15)} height={wp(15)} />
                </TouchableOpacity>
            </Item>
            <Item horizontalCenter marginTop={hp(2)}>
                <Label fontSecondary size={24} color={colors.black} style={{ marginBottom: hp(1) }}>Shayna Melinda</Label>
                <Label fontSecondary size={18} color={colors.grey}>Product Designer</Label>
            </Item>
        </Item>
    )
}

export default Profile

const styles = StyleSheet.create({
    border: {
        borderWidth: 1, width: wp(45), height: wp(45), borderRadius: wp(45 / 2),
        borderColor: colors.grey, justifyContent: 'center', alignItems: 'center'
    },
    btn: { position: 'absolute', bottom: wp(0), right: wp(0) },
})
