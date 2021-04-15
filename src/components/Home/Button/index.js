import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import style from './style'

const Button = props => {
    return (
        <TouchableOpacity style={[style.container, {backgroundColor: props.
        bgColor}]}>
            <Text style={[style.title, {color: props.color}]}>{props.children}
            </Text>
        </TouchableOpacity >
    );
};

export default Button;