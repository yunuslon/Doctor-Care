import React from 'react'
import { Left } from '@asset/index'
import Label from '../Label'
import Item from '../Item'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface AppbarProps { onPress: () => void, title: string, color: string }
const Appbar: React.FC<AppbarProps> = ({ onPress, title, color }) => {
    return (
        <Item row horizontalCenter height={hp(15)}>
            <TouchableOpacity onPress={onPress}>
                <Item width={wp(10)} horizontalCenter>
                    <Left width={wp(9)} height={hp(6)} />
                </Item>
            </TouchableOpacity>
            <Item width={wp(90)} horizontalCenter>
                <Label size={20} fontSecondary color={color} style={{ marginRight: wp(10) }}>{title}</Label>
            </Item>
        </Item>
    )
}

export default Appbar

const styles = StyleSheet.create({})
