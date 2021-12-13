import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

interface itemProps {
    children?: React.ReactNode,
    itemKey?: string,
    safeView?: boolean,
    safeViewFlex?: number,
    safeVerticalCenter?: boolean,
    safeHorizontalCenter?: boolean,
    style?: any,
    square?: number,
    height?: number | string,
    width?: number | string,
    flex?: number,
    row?: boolean,
    full?: boolean,
    padding?: number,
    paddingTop?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
    margin?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    paddingHorizontal?: number | string,
    paddingVertical?: number | string,
    marginHorizontal?: number,
    marginVertical?: number,
    verticalCenter?: boolean,
    verticalStart?: boolean,
    verticalEnd?: boolean,
    horizontalCenter?: boolean,
    horizontalStart?: boolean,
    horizontalEnd?: boolean,
    textCenter?: boolean,
    selfCenter?: boolean,
    absolute?: boolean,
    border?: boolean,
    borderWidth?: number,
    borderStyle?: string,
    borderColor?: string,
    bg?: string,
    color?: string,
    borderRadius?: number,
    top?: number | boolean,
    bottom?: number | boolean,
    left?: number | boolean,
    right?: number | boolean
}

const Item: React.FC<itemProps> = ({
    children,
    itemKey,
    safeView,
    safeViewFlex,
    safeVerticalCenter,
    safeHorizontalCenter,
    style,
    flex,
    row,
    full,
    square,
    height,
    width,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    marginVertical,
    verticalCenter,
    verticalStart,
    verticalEnd,
    horizontalCenter,
    horizontalStart,
    horizontalEnd,
    textCenter,
    selfCenter,
    absolute,
    bg,
    color,
    border,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    top,
    bottom,
    left,
    right
}) => {

    const styleCustom = [
        style,
        {
            ...(flex ? { flex } : null),
            ...(row ? { flexDirection: 'row' } : null),
            ...(full ? { width: '100%' } : null),
            ...(square ? { width: square, height: square } : null),
            ...(height ? { height } : null),
            ...(width ? { width } : null),
            ...(padding ? { padding } : null),
            ...(paddingTop ? { paddingTop } : null),
            ...(paddingBottom ? { paddingBottom } : null),
            ...(paddingLeft ? { paddingLeft } : null),
            ...(paddingRight ? { paddingRight } : null),
            ...(margin ? { margin } : null),
            ...(marginTop ? { marginTop } : null),
            ...(marginBottom ? { marginBottom } : null),
            ...(marginLeft ? { marginLeft } : null),
            ...(marginRight ? { marginRight } : null),
            ...(paddingHorizontal ? { paddingHorizontal } : null),
            ...(paddingVertical ? { paddingVertical } : null),
            ...(marginHorizontal ? { marginHorizontal } : null),
            ...(marginVertical ? { marginVertical } : null),
            ...(verticalCenter ? { justifyContent: 'center' } : null),
            ...(verticalStart ? { justifyContent: 'flex-start' } : null),
            ...(verticalEnd ? { justifyContent: 'flex-end' } : null),
            ...(horizontalCenter ? { alignItems: 'center' } : null),
            ...(horizontalStart ? { alignItems: 'flex-start' } : null),
            ...(horizontalEnd ? { alignItems: 'flex-end' } : null),
            ...(textCenter ? { textAlign: 'center' } : null),
            ...(selfCenter ? { alignSelf: 'center' } : null),
            ...(absolute ? { position: 'absolute' } : null),
            ...(bg ? { backgroundColor: bg } : null),
            ...(color ? { color } : null),
            ...(border ? { borderWidth, borderStyle, borderColor } : null),
            ...(borderRadius ? { borderRadius, } : null),
            ...(top ? { top } : null),
            ...(bottom ? { bottom } : null),
            ...(left ? { left } : null),
            ...(right ? { right } : null),
        }
    ];

    if (safeView) return (
        <SafeAreaView style={{
            ...(safeViewFlex ? { flex: safeViewFlex } : null),
            ...(safeVerticalCenter ? { justifyContent: 'center' } : null),
            ...(safeHorizontalCenter ? { alignItems: 'center' } : null),
        }}>
            <View
                key={itemKey}
                style={styleCustom}>
                {children}
            </View>
        </SafeAreaView>
    )
    return (
        <View
            key={itemKey}
            style={styleCustom}>
            {children}
        </View>
    )
}

export default Item;