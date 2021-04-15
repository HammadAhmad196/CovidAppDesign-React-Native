import React from 'react';
import { View, Image, Text} from 'react-native';
import { Header } from 'react-native-elements';
import style from './style';

const Headers = () => {
    return(
        <Header
            containerStyle={style.headerContainer}
            leftComponent={<Image source={require('../../../assets/icons/bar.png')} 
            />}
            centerComponent={{text: 'COVID-19', style:{...style.headerTitle}}}
            rightComponent={<Image source={require('../../../assets/icons/search.png')} 
            style={style.headerRight} />}
        />
    );
};
export default Headers;