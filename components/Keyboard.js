import React,{useState} from "react";
import {View, Text, KeyboardAvoidingView, TextInput, Platform, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Keyboard = ({addTask}) =>{
    const [task,setTask] = useState("");
    
    const handleAddTask =()=>{
        addTask(task);
        setTask("");
    }
    return (
        <View>
             <KeyboardAvoidingView 
             style={styles.keyboard}
             behavior={Platform.OS === 'ios'?"padding":"height"}>
                
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Add task here" 
                            value={task} 
                            onChangeText={(text) => {setTask(text)}}>               
                        </TextInput>
                       
                        <Icon name="add" size={20} color="black"  style={styles.iconStyle} onPress={handleAddTask}/>
                      
                        
                    </View>
                
             </KeyboardAvoidingView>
        </View>
    )
}

const styles=StyleSheet.create({
    keyboard:{
        // flexDirection:'row',
        // justifyContent:'space-between',
        // marginRight:40,
        // padding:10,
        // alignItems:'center',
        // borderWidth:1,
        // borderTopLeftRadius:10,
        // borderTopRightRadius:10,
        // bottom:0,
        // position:'absolute',
        // width:'100%'
           
    },
    iconStyle:{
        backgroundColor:'#daa520',
        width:35,
        height:35,
        // alignSelf:'center',
        // alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center'

    },
    inputContainer:{
        flexDirection:'row',
        width:'100%',
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "white"
    },

    input:{
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonContainer:{
        backgroundColor:'#daa520',
        width:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
    }, 
    buttonText:{
        fontSize: 16,
    },
})

export default Keyboard;