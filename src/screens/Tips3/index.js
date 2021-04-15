import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import NextButton from "../../components/Tips/NextButton/index";
import { DotBold, DotLight } from '../../components/Tips/DotSlider/index';
import style from './style';

const Tips3 = props => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/img/wash_hand1.png')} style=
                    {style.image1} resizeMode="stretch" />
                <Image source={require('../../assets/img/user_tissue.png')} style=
                    {style.image} resizeMode="stretch" />
            </View>
            <Text style={style.textTitle}>Use Nose Rag</Text>
            <Text style={style.textBody}>Cover your nose and mouth with your bent elbow or a tissue when you cough</Text>
            <NextButton onClick={() => props.navigation.navigate("Home")}><Text  style={{fontSize: 20}}>Next Step</Text></NextButton>
            <View style={{flexDirection: 'row'}}>
                <DotLight />
                <DotLight />
                <DotBold />
            </View>
        </View>
    )
}
export default Tips3;