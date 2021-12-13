import { Star } from '@asset/index';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StarV = () => {
    var tmp = [];

    for (let i = 0; i < 5; i++) {
        tmp.push(
            <Star width={wp(5)} height={wp(5)} style={{ marginHorizontal: wp(0.5) }} key={i} />
        );

    }
    return (
        <View style={{ flexDirection: 'row' }}>
            {tmp}
        </View>
    )
}

export default StarV

const styles = StyleSheet.create({})
