import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Message, MessageAktif, Face, FaceAktif, Map, MapAktif } from '@asset/index';
import { colors, fonts } from '@helper/index';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface TabItemProps {
    title: string,
    active: boolean,
    onPress: () => void,
    onLongPress: () => void,
}
const TabItem: React.FC<TabItemProps> = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <FaceAktif width={wp(7)} height={wp(7)} /> : <Face width={wp(7)} height={wp(7)} />;
        }
        if (title === 'Message') {
            return active ? <MessageAktif width={wp(7)} height={wp(7)} /> : <Message width={wp(7)} height={wp(7)} />;
        }
        if (title === 'Hospital') {
            return active ? <MapAktif width={wp(7)} height={wp(7)} /> : <Map width={wp(7)} height={wp(7)} />;
        }
        return <Face />;
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={[styles.text, { color: active ? colors.primary : colors.grey }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
    container: { alignItems: 'center', },
    text: { fontSize: 14, fontFamily: fonts.semiBold, marginTop: 4 }
});
