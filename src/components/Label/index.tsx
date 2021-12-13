import React from 'react';
import { Text, GestureResponderEvent } from 'react-native';
import { fonts, colors } from '@helper/index';

interface LabelProps {
    onPress?: (event: GestureResponderEvent) => void,
    children?: React.ReactNode,
    style?: any,
    color?: string,
    size?: number,
    bold?: boolean,
    primary?: boolean,
    secondary?: boolean,
    fontPrimary?: boolean,
    fontSecondary?: boolean,
    gray?: boolean,
    black?: boolean,
    white?: boolean,
    center?: boolean,
    justify?: boolean
    left?: boolean,
    right?: boolean,
    Lines?: number,
    mt?: number,
    mb?: number,
    ml?: number,
    mr?: number,
    pt?: number,
    pb?: number,
    pl?: number,
    pr?: number,
    vertical?: number, horizontal?: number,
}

const Label: React.FC<LabelProps> = ({
    onPress,
    children,
    style,
    color,
    size,
    bold,
    primary,
    secondary,
    fontPrimary,
    fontSecondary,
    gray,
    black,
    white,
    center,
    justify,
    left, right, Lines, mt, mb, ml, mr, pt, pb, pl, pr,
    vertical, horizontal,
}) => {
    return (
        <Text
            onPress={onPress}
            style={[
                style,
                {
                    ...(color ? { color } : null),
                    ...(primary ? { color: colors.primary } : null),
                    ...(secondary ? { color: colors.secondary } : null),
                    ...(black ? { color: colors.black } : null),
                    ...(gray ? { color: colors.grey } : null),
                    ...(white ? { color: colors.white } : null),
                    ...(size ? { fontSize: size } : null),
                    ...(fontPrimary ? { fontFamily: fonts.regular } : null),
                    ...(fontSecondary ? { fontFamily: fonts.semiBold } : null),
                    ...(bold ? { fontWeight: 'bold' } : null),
                    ...(center ? { textAlign: 'center' } : null),
                    ...(justify ? { textAlign: 'justify' } : null),
                    ...(left ? { textAlign: 'left' } : null),
                    ...(right ? { textAlign: 'right' } : null),
                    ...(Lines ? { numberOfLines: Lines } : null),
                    ...(mt ? { marginTop: mt } : null),
                    ...(mb ? { marginBottom: mb } : null),
                    ...(ml ? { marginLeft: ml } : null),
                    ...(mr ? { marginRight: mr } : null),
                    ...(pt ? { paddingTop: pt } : null),
                    ...(pb ? { paddingBottom: pb } : null),
                    ...(pl ? { paddingLeft: pl } : null),
                    ...(pr ? { paddingRight: pr } : null),
                    ...(vertical ? { marginVertical: vertical } : null),
                    ...(horizontal ? { marginHorizontal: horizontal } : null),
                }
            ]}>
            {children}
        </Text>
    );
}

export default Label;