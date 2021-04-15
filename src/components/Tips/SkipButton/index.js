import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import style from './style'

const SkipButton = props => {
    return (
        <TouchableOpacity style={style.container} onPress={props.onClick}>
            <Text style={style.title}>Skip</Text>
        </TouchableOpacity>
    )
}
export default SkipButton;