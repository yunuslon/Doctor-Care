import Label from '../Label'
import Item from '../Item';
import { colors } from '@helper/index';
import React from 'react';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CardNews from './CardNews';



const News: React.FC = () => {
    return (
        <Item marginTop={hp(2)}>
            <Label fontSecondary color={colors.black} size={20}
                style={{ marginBottom: hp(1) }}>Good News</Label>
            <CardNews />
            <CardNews />
            <CardNews />
        </Item>
    )
}

export default News

const styles = StyleSheet.create({})
