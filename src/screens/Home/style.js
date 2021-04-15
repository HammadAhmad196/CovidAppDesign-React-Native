import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        borderLeftColor: '#FFF',
        borderLeftWidth: 24,
        backgroundColor: '#FFF',
    },
    body: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FFF0D9',
        borderWidth: 5,
        borderColor: '#FFF0D9',
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
    },
    textBody: {
        marginHorizontal: '10%',
        marginVertical: '2.5%',
        fontFamily: 'HelveticaNeue',
        color: '#0F0C08',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textDoctor: {
        fontSize: 20,
        marginVertical: '10%',
        fontFamily: 'HelveticaNeue',
    },
    iconContainer: {
        width: '100%',
        height: '60%'
    }
});
export default style;