import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Doctor, Hospital, LandingPage, ListDoctor, Login, Message, Register, SplashScreen, UploadPhoto } from '@screen/index';
import React from 'react';
import { StyleSheet } from 'react-native';
import BottomNavigator from '@component/ButtomNavigator';

const screenOptions = { headerShown: false };

const MyTabs: React.FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={screenOptions} tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name={'Doctor'} component={Doctor} />
            <Tab.Screen name={'Message'} component={Message} />
            <Tab.Screen name={'Hospital'} component={Hospital} />
        </Tab.Navigator>
    );
}
const NavigationRoot: React.FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
                <Stack.Screen name={'LandingPage'} component={LandingPage} />
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Register'} component={Register} />
                <Stack.Screen name={'UploadPhoto'} component={UploadPhoto} />
                <Stack.Screen name={'ListDoctor'} component={ListDoctor} />
                <Stack.Screen name={'MyTabs'} component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoot

const styles = StyleSheet.create({})
