import React from 'react'
import { StatusBar } from 'react-native'
import { IconWhite } from '@asset/index'
import { Item, Label } from '@component/index'
import { colors } from '@helper/index'
import { useNavigation, CommonActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackList } from '@nav/RootStackList'


const SplashScreen: React.FC = () => {
    type SplashScreenScreenProp = NativeStackNavigationProp<RootStackList, 'SplashScreen'>;
    const navigation = useNavigation<SplashScreenScreenProp>();
    // const Reset = (loc: string) => {
    //     navigation.dispatch(
    //         CommonActions.reset({
    //             index: 0,
    //             routes: [{ name: loc }],
    //         })
    //     );
    // }
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('LandingPage')
        }, 2000)
    }, [])
    return (
        <Item flex={1} bg={colors.primary} verticalCenter horizontalCenter>
            <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
            <IconWhite width={'40%'} height={'10%'} />
            <Label white fontSecondary size={22} style={{ marginTop: '3%' }}>My Doctor</Label>
        </Item>
    )
}

export default SplashScreen
