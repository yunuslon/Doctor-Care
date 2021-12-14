import React from 'react'
import { ImageBackground, StatusBar, } from 'react-native'
import { Button, Item, Label, } from '@component/index'
import { IconBlue, BG } from '@asset/index'
import { colors } from '@helper/index'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '@nav/RootStackList';

const LandingPage: React.FC = () => {
    type LandingPageScreenProp = NativeStackNavigationProp<RootStackList, 'LandingPage'>;
    const navigation = useNavigation<LandingPageScreenProp>();

    return (
        <ImageBackground source={BG} style={{ flex: 1 }}>
            <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
            <IconBlue width={'25%'} height={'10%'} style={{ marginLeft: '7%', marginTop: '10%' }} />
            <Item flex={2} verticalCenter style={{ marginHorizontal: '10%', }}>
                <Label white fontSecondary size={32}>{`Konsultasi dengan dokter jadi lebih \nmudah & fleksibel`}</Label>
            </Item>
            <Item flex={1} horizontalCenter >
                <Button onPress={() => { navigation.navigate('Register') }} primary
                    full borderRadius={10} title={'Get Started'} height={'30%'} />
                <Button onPress={() => { navigation.navigate('Login') }}
                    full borderRadius={10} title={'Sign In'} height={'30%'}
                    style={{ backgroundColor: colors.white, marginTop: '5%', }} />
            </Item>
        </ImageBackground>

    )
}

export default LandingPage

