import { Item, Konsultasi, Label, News, ProfilePic, StarV } from '@component/index';
import { colors } from '@helper/index';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Doctor: React.FC = () => {
    return (
        <Item bg={colors.black} flex={1}>
            <Item bg={colors.white} flex={1}
                style={{ borderBottomRightRadius: wp(7), borderBottomLeftRadius: wp(7) }}>
                <ProfilePic horizontal={wp(4)} vertical={hp(4)} name={'Shayna Melinda'} text={'Product Designer'} />
                <ScrollView>
                    <Konsultasi />
                    <Item marginHorizontal={wp(4)} marginTop={hp(2)} marginBottom={hp(4)}>
                        <Label fontSecondary size={20} color={colors.black}
                            style={{ marginBottom: hp(2) }}>Top Rated Doctors</Label>
                        <Item row horizontalCenter style={{ justifyContent: 'space-between' }}>
                            <ProfilePic vertical={hp(1.5)} name={'Alexa Rachel'} text={'Pediatrician'} />
                            <StarV />
                        </Item>
                        <Item row horizontalCenter style={{ justifyContent: 'space-between' }}>
                            <ProfilePic vertical={hp(1.5)} name={'Sunny Frank'} text={'Dentist'} />
                            <StarV />
                        </Item>
                        <Item row horizontalCenter style={{ justifyContent: 'space-between' }}>
                            <ProfilePic vertical={hp(1.5)} name={'Poe Minn'} text={'Podiatrist'} />
                            <StarV />
                        </Item>
                        <News />
                    </Item>
                </ScrollView>
            </Item>
        </Item>
    )
}

export default Doctor

const styles = StyleSheet.create({})
