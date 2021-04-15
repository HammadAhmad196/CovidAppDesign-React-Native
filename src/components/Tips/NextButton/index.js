import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './style';

const NextButton = props => {
    return (
        <TouchableOpacity style={style.container} onPress={props.onClick}>
            <Text style={style.title}>{props.children}</Text>
        </TouchableOpacity>
    )
}
export default NextButton;