import React from 'react';
import { GestureResponderEvent, Dimensions, TouchableOpacity } from 'react-native';
import Item from '../Item';
import Label from '../Label';
import { colors } from '@helper/index';

interface ButtonProps {
    onPress?: (event: GestureResponderEvent) => void,
    title: string,
    full?: boolean,
    type?: string,
    style?: any,
    primary?: boolean,
    disabled?: boolean,
    borderRadius?: number
    height?: number | string,
}

const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    full,
    style,
    primary,
    height,
    borderRadius,
    disabled
}) => {
    const SCREEN = Dimensions.get('screen');
    const FULL_WIDTH = SCREEN.width;
    return !disabled ? (
        <TouchableOpacity onPress={onPress} style={[
            style,
            {
                ...(primary ? { backgroundColor: colors.primary } : { backgroundColor: colors.disabled }),
                ...(borderRadius ? { borderRadius } : null),
                ...(height ? { height: height } : null),
                ...(full ? { width: FULL_WIDTH - 30 } : null),
                alignItems: 'center', justifyContent: 'center',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
            }
        ]}>
            <Label fontSecondary color={primary ? colors.white : colors.black} size={18}>
                {title}
            </Label>
        </TouchableOpacity>
    ) : (
        <Item style={[
            style, {
                ...(primary ? { backgroundColor: colors.primary } : { backgroundColor: colors.disabled }),
                ...(borderRadius ? { borderRadius } : null),
                ...(height ? { height: height } : null),
                ...(full ? { width: FULL_WIDTH - 30 } : null),
                alignItems: 'center', justifyContent: 'center',
                shadowColor: "#000", shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
            }
        ]}>
            <Label fontSecondary color={primary ? colors.white : colors.black} size={18}>
                {title}
            </Label>
        </Item>
    );
}

export default Button;