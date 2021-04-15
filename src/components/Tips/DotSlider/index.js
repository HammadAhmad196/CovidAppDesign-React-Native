import React from 'react';
import { View, Dimensions } from 'react-native';
import style from './style';

export  const DotBold = () => {
    return (
        <View style={style.dotBold}></View>
    );
};

export const DotLight = () => {
    return (
        <View opacity={0.4} style={style.DotLight}></View>
    )
}