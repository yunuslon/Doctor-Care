import Label from '../Label'
import Item from '../Item';
import { colors } from '@helper/index';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ProfilProps {
    horizontal?: number,
    vertical?: number,
    name?: string,
    text?: string,
    line?: boolean,
}
const ProfilePic: React.FC<ProfilProps> = ({ horizontal, vertical, name, text, line }) => {
    return (
        <Item>
            <Item row horizontalCenter marginHorizontal={horizontal} marginVertical={vertical}>
                <Image source={{ uri: 'https://i.pravatar.cc/100' }}
                    style={{ width: wp(15), height: wp(15), borderRadius: wp(15 / 2) }} />
                <Item marginLeft={wp(4)}>
                    <Label fontSecondary size={16} color={colors.black}>{name}</Label>
                    <Label fontPrimary size={14} color={colors.grey}>{text}</Label>
                </Item>
            </Item>
            {line ? (
                <View style={{ borderBottomColor: colors.disabled, borderBottomWidth: wp(0.5), width: wp(100) }} />
            ) : null}
        </Item>

    )
}

export default ProfilePic

const styles = StyleSheet.create({})
