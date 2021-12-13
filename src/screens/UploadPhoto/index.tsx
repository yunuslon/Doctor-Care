import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Appbar, Button, Item, Label, Profile } from '@component/index'
import { colors } from '@helper/index';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const UploadPhoto: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Item flex={1} bg={colors.white} paddingHorizontal={wp(3)}>
            <Appbar color={colors.black} title={'Upload Photo'} onPress={() => { navigation.goBack() }} />
            <Item height={hp(45)} >
                <Profile />
            </Item>
            <Item height={hp(40)} verticalCenter >
                <Button onPress={() => { }}
                    borderRadius={10} title={'Upload and Continue'} height={hp(8)}
                    style={{ marginTop: hp(4) }} disabled />
                <TouchableOpacity style={{ alignItems: 'center', marginTop: hp(4) }}
                    onPress={() => { }}>
                    <Label fontSecondary size={17} color={colors.grey}
                        style={{ textDecorationLine: 'underline' }}>Skip for this</Label>
                </TouchableOpacity>
            </Item>
        </Item>
    )
}

export default UploadPhoto

