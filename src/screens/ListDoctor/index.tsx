import { Appbar, Item, ProfilePic } from '@component/index'
import { colors } from '@helper/index'
import { RootStackList } from '@nav/RootStackList'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'


const ListDoctor: React.FC = () => {
    const route = useRoute<RouteProp<RootStackList, 'ListDoctor'>>();
    const navigation = useNavigation();
    const { titleAppbar } = route.params;
    return (
        <Item flex={1} bg={colors.white}>
            <Appbar title={titleAppbar} onPress={() => navigation.goBack()} color={colors.black} />
            <ProfilePic name={'Alexander Jannie'} text={'Wanita'} />
        </Item>
    )
}

export default ListDoctor

const styles = StyleSheet.create({})
