import React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';

import Header from '../../components/Home/Headers/index';
import Button from '../../components/Home/Button/index';
import Icons from '../../components/Home/Icons/index';
import style from './style';
import Footer from '../../components/Home/Footer/index';

const Home = props => {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 200}} style={style.container}>
                <Header />
                <View style={style.body}>
                    <Text style={style.textBody}>Emergency</Text>
                    <Text style={[style.textBody, { fontSize: 20 }]}>Have you infected
                    Covid-19?</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button bgColor="#F5AD47" color="#FFF">Call Now</Button>
                        <Button bgColor="#FFF">Find Doctor</Button>
                    </View>
                </View>
                <Text style={style.textDoctor}>Doctor Suggestions</Text>
                <View style={style.iconContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icons bgColor="#E2E2E2" name="users" color="#F5AD47">People
                        {'\n'}Awareness</Icons>
                        <Icons bgColor="#D3EAF9" name="dumbbell" color="#47AFF5">Exersize
                        {'\n'}Suggestion</Icons>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icons bgColor="#D5CFFF" name="utensils" color="#474EF5">Food
                        {'\n'}Suggestion</Icons>
                        <Icons bgColor="#F9C8E7" name="pills" color="#FF6FC8">Medicine
                        {'\n'}Suggestion</Icons>
                    </View>
                </View>
                <Footer />
        </ScrollView>
    );
};
export default Home;