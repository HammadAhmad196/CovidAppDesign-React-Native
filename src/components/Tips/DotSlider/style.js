import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
    dotBold: {
        width: Dimensions.get('window').width * 0.04,
        height: Dimensions.get('window').width * 0.04,
        borderRadius: Dimensions.get('window').width * 0.04 / 2,
        backgroundColor: '#F5AD47',
        marginHorizontal: '2%'
    },
    DotLight: {
        width: Dimensions.get('window').width * 0.03,
        height: Dimensions.get('window').width * 0.03,
        borderRadius: Dimensions.get('window').width * 0.03 / 2,
        backgroundColor: '#F5AD47',
        marginHorizontal: '2%',
        marginVertical: '0.5%'
    }
});
export default style;