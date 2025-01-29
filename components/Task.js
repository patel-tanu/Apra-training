import React, {useState} from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Edittask from "./Edittask";


const Task = ({index,task,modifyTask,deleteTask}) =>{
    const [completed, setCompleted] = useState(false);
    const [isEditing, setisEditing] = useState(false);

    return (
        <View style={styles.items}>
            {
                isEditing ? 
                (<Edittask    
                    task = {task}
                    onSave = {(newTask) => {
                        modifyTask(index, newTask)
                        setisEditing(false)
                    }}
                />):(<>
            
            <TouchableOpacity 
                onPress={()=>setCompleted(!completed)} 
                style={[styles.circle, completed && styles.taskCompleted && styles.button]}>

                    {completed ? (<Icon name="check" size={15} color="black"  style={styles.iconStyle}/>) : null}
            </TouchableOpacity>
    
            <Text style={[styles.text, completed && styles.completedtext]}>{task}</Text>
            
            
            <View style={styles.button}>
            

            <TouchableOpacity onPress={()=>deleteTask(index)} style={styles.deleteButton}>
                <Icon name="delete" size={20} color="black"  style={styles.iconStyle}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setisEditing(true)} style={styles.editButton}>
                <Icon name="edit" size={20} color="black"  style={styles.iconStyle}/>
            </TouchableOpacity>
            </View>
            </>
            )};
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,  
        // flexWrap:'wrap',
        marginRight:15,
        marginLeft:10,
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
        height:20,
        width:20,
        backgroundColor:'transparent',
        borderColor:'green',
        borderRadius:15,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute'

    },
    taskCompleted:{
        backgroundColor:'red',

    },
    completedtext:{
        textDecorationLine:'line-through',
        color:'lightgray'
    },
    button:{
        marginLeft:'auto',
        flexDirection:'row',
        justifyContent:'space-between',
        color:'grey'
    },
    editButton:{
        marginLeft:10,
    },
    deleteButton:{
        marginLeft:'auto',
    }
    

})

export default Task;