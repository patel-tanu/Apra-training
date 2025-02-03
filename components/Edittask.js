import React,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Edittask = ({task, onSave}) =>{
    const [newTask, setNewTask] = useState(task);

    const handleSave = () =>{
        if(newTask.trim()){
            onSave(newTask);
        }
    };


    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={newTask}
                onChangeText={setNewTask}
                onSubmitEditing={handleSave}
                // returnKeyType="done"
            />

            <TouchableOpacity onPress={handleSave} style={styles.save}>
                <Text>Save</Text>
            </TouchableOpacity>

          



        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        
    },
    input:{},
    save:{
        backgroundColor:'#d2691e',
        width:50,
        height:20,
        alignItems:'center',
        borderRadius:3
    }


});


export default Edittask;
