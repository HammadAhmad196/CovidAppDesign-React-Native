import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import NextButton from "../../components/Tips/NextButton/index";
import { DotBold, DotLight } from '../../components/Tips/DotSlider/index';
import style from './style';

const Tips1 = props => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/img/wash_hand1.png')} style=
                    {style.image1} resizeMode="stretch" />
                <Image source={require('../../assets/img/wash_hand.png')} style=
                    {style.image} resizeMode="stretch" />
            </View>
            <Text style={style.textTitle}>Wash your hands</Text>
            <Text style={style.textBody}>Clean your hands often. Use soap and water,
            or an alchol-based hand rub</Text>
            <NextButton onClick={() => props.navigation.navigate("Tips2")}><Text  style={{fontSize: 20}}>Next Step</Text></NextButton>
            <View style={{ flexDirection: 'row' }}>
                <DotBold />
                <DotLight />
                <DotLight />
            </View>
        </View>
    )
}
export default Tips1;