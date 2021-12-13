import Label from '../Label'
import Item from '../Item'
import React from 'react'
import { TextInput } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface InputProps {
    val?: string,
    onChangeText: (data: string) => void,
    title: string,
    height?: number | string,
    font?: string,
    mt?: number,
    placeholder?: string,
    borderColor?: string,
    color?: string,
    colorAktif?: string,
    style?: any,
    pass?: boolean,
}

const Input: React.FC<InputProps> = (
    { val, onChangeText, title, height, font, mt, placeholder,
        style, borderColor, color, pass, colorAktif
    }) => {
    const [border, setBorder] = React.useState(borderColor);
    const onFocusForm = () => {
        setBorder(colorAktif);
    };
    const onBlurForm = () => {
        setBorder(borderColor);
    };
    return (
        <Item marginTop={mt}>
            <Label fontPrimary size={16} style={{ marginBottom: 15 }} >{title}</Label>
            <TextInput placeholder={placeholder}
                style={[
                    style,
                    {
                        ...({ paddingHorizontal: 15, borderWidth: 2, borderRadius: 10, fontSize: 16 }),
                        ...(font ? { fontFamily: font } : null),
                        ...(height ? { height: hp(height) } : null),
                        ...(borderColor ? { borderColor: border } : null),
                        ...(color ? { color: color } : null),
                    }]}
                value={val}
                secureTextEntry={pass ? true : false}
                onChangeText={onChangeText}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
            />
        </Item>
    )
}

export default Input

