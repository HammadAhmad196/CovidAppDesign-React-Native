import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import NextButton from "../../components/Tips/NextButton/index";
import { DotBold, DotLight } from '../../components/Tips/DotSlider/index';
import style from './style'

const Tips2 = props => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/img/wash_hand1.png')} style=
                    {style.image1} resizeMode="stretch" />
                <Image source={require('../../assets/img/wear_mask.png')} style=
                    {style.image} resizeMode="stretch" />
            </View>
            <Text style={style.textTitle}>Wear Mask</Text>
            <Text style={style.textBody}>Cover mouth and nose with mask & no  gaps between your face and the mask</Text>
            <NextButton onClick={() => props.navigation.navigate("Tips3")}><Text  style={{fontSize: 20}}>Next Step</Text></NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotLight />
                <DotBold />
                <DotLight />
            </View>
        </View>
    )
}
export default Tips2;