import { Item, Label, ProfilePic } from '@component/index'
import { colors } from '@helper/index'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Message: React.FC = () => {
    return (
        <Item bg={colors.black} flex={1}>
            <Item bg={colors.white} flex={1}
                style={{ borderBottomRightRadius: wp(7), borderBottomLeftRadius: wp(7) }}>
                <Label fontSecondary color={colors.black} size={21}
                    style={{ marginVertical: hp(2), marginTop: hp(5), marginLeft: wp(4) }}>Messages</Label>
                <ProfilePic vertical={hp(1.5)} name={'Alexander Jannie'} line horizontal={wp(3)}
                    text={'Baik ibu, terima kasih banyak atas wakt...'} />
                <ProfilePic vertical={hp(1.5)} name={'Alexander Jannie'} line horizontal={wp(3)}
                    text={'Baik ibu, terima kasih banyak atas wakt...'} />
                <ProfilePic vertical={hp(1.5)} name={'Alexander Jannie'} line horizontal={wp(3)}
                    text={'Baik ibu, terima kasih banyak atas wakt...'} />
                <ProfilePic vertical={hp(1.5)} name={'Alexander Jannie'} line horizontal={wp(3)}
                    text={'Baik ibu, terima kasih banyak atas wakt...'} />
            </Item>
        </Item>
    )
}

export default Message

const styles = StyleSheet.create({})
