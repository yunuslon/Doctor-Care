import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '@helper/colors';

const Loading = () => {
    return (
        <View style={{
            backgroundColor: "rgba(135, 147, 168,0.5)", position: 'absolute', width: '100%',
            height: '100%', justifyContent: 'center', alignItems: 'center',
        }}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text >Loading...</Text>
        </View>
    )
}

export default Loading  