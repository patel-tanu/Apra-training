import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'gray',
        flex: 1,
    },
    title: {
        padding: 20,
        backgroundColor: '#deb887',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    
    text_task: {
        fontSize: 16,
        marginRight: 15,
        marginLeft: 15,
        flexShrink: 1,
    },
    items: {
        backgroundColor: 'white',
        margin: 10,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    circle: {
        height: 20,
        width: 20,
        borderColor: 'green',
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
    },
    taskCompleted: {
        backgroundColor: 'green'
    },
    completedtext: {
        textDecorationLine: 'line-through', 
        color: 'lightgray'
    },
    button: {
        marginLeft: 'auto', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'row', 
        padding: 8, 
        backgroundColor: 'white',
        justifyContent:'space-around',
        alignItems:'center'
    },
    input: {
        flex: 1, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 5
    },
    iconStyle: {
        backgroundColor: '#daa520', 
        padding: 8, 
        borderRadius: 5,
        margin:10,
        
    },
    
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    modInput: {
        borderColor: 'black', 
        borderWidth: 1, 
        flex: 1, 
        padding: 5
    },
    save: {
        backgroundColor: '#d2691e',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
    },

  
 
});

export default styles;
