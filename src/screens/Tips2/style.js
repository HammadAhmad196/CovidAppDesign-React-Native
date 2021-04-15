import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCF6EE'
    },
    imageContainer: {
        width: '50%',
        height: '35%',
        marginVertical: '5%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        marginTop: 10
    },
    image1: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    textTitle: {
        fontSize: 36,
        fontFamily: "HelveticaNeue-Bold"
    },
    textBody: {
        width: '75%',
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        marginVertical: '5%',
        textAlign: 'center'
    }
});
export default style;