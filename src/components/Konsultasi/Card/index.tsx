import { DokterAnak, DokterUmum, Obat, Psikiater } from '@asset/SVG';
import Item from '../../Item';
import Label from '../../Label';
import { colors } from '@helper/index'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface CardProps {
    iconName: string,
    title: string,
    onPress?: () => void,
}
const Card: React.FC<CardProps> = ({ iconName, title, onPress }) => {
    const Icon = () => {
        if (iconName === 'Umum') {
            return <DokterUmum width={wp(15)} height={wp(15)} />
        }
        if (iconName === 'Anaka') {
            return <DokterAnak width={wp(15)} height={wp(15)} />
        }
        if (iconName === 'Psikiater') {
            return <Psikiater width={wp(15)} height={wp(15)} />
        }
        if (iconName === 'Obat') {
            return <Obat width={wp(15)} height={wp(15)} />
        }

    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Item bg={colors.softBlue} width={wp(30)} height={hp(20)}
                style={{
                    borderRadius: wp(4), paddingVertical: wp(2),
                    paddingHorizontal: wp(2), justifyContent: 'space-between', marginRight: wp(2),
                }}>
                {Icon()}
                <Item marginBottom={hp(1)}>
                    <Label fontPrimary color={colors.grey} size={15}>Saya butuh</Label>
                    <Label fontSecondary color={colors.black} size={16}>{title}</Label>
                </Item>
            </Item>
        </TouchableOpacity>
    )
}

export default Card

