import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style'

const Icons = props => {
    return (
        <TouchableOpacity style={[style.container, {backgroundColor: props.bgColor}]}>
            <View style={style.iconWrapper}>
                <Icon name={props.name} size={24} color={props.color} />
            </View>
            <Text style={style.text}>{props.children}</Text>
        </TouchableOpacity>
    );
};
export default Icons;