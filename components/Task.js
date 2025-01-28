import React, {useState} from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Task = (props) =>{
    const [completed, setCompleted] = useState(false);

    return (
        <View style={styles.items}>
            <View style={styles.square}></View>
    
            <Text style={[styles.text, completed && styles.completedtext]}>{props.task}</Text>

            <TouchableOpacity 
                onPress={()=>setCompleted(!completed)} 
                style={[styles.circle, completed && styles.taskCompleted]}>

                    {completed ? (<Icon name="check" size={20} color="white"  style={styles.iconStyle}/>) : null}
            </TouchableOpacity>
            {/* <View style={styles.circle}></View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,  
        // flexWrap:'wrap',
        marginRight:15,
        flexShrink: 1,

    },
    items:{
        backgroundColor:"white",
        margin:10,
        // flex:1,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        fontSize:200,
        borderRadius:10,
    },
    square:{
        backgroundColor:'darkblue',
        width:10,
        height:10,
        // flex:1,
        flexDirection:'row',
        // alignItems:'center',
        // verticalAlign:'center'
        // alignContent:'center',
        alignSelf:'center',
        margin:10
    },
    circle:{
        height:30,
        width:30,
        backgroundColor:'transparent',
        borderColor:'green',
        borderRadius:15,
        borderWidth:2,
        marginLeft:'auto',
        justifyContent:'center',
        alignItems:'center',
    },
    taskCompleted:{
        backgroundColor:'green',

    },
    completedtext:{
        textDecorationLine:'line-through',
        color:'lightgray'
    },
    iconStyle:{
        // fontWeight:
    }
    

})

export default Task;