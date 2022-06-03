import { SafeAreaView,
    Text, 
    StyleSheet,
    ScrollView, 
    View, 
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    TextInput, } 
    from "react-native";

import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
//import {Formik} from "formik";


export default function NewRecipeForm({addBreakfast}) {

    /*return(
     
        <View >
         <Formik  
                initialValues={{titel:'', ingredients:'', cooking}}
                onSubmit={(values, action)=>{
                    addBreakfast(values);
                    action.resetForm();
                }}>
                    {(props)=>(
                        <View>
                            <TextInput multiline
                                style={styles.titel}
                                value={props.values.titel}
                                placeholder='Titel'
                                onChangeText={props.handleChange('titel')}/>

                            <TextInput multiline
                                style={styles.ingredients}
                                value={props.values.ingredients}
                                placeholder='ingredients'
                                onChangeText={props.handleChange('ingredients')}/>

                            <TextInput multiline
                                style={styles.cooking}
                                value={props.values.cooking}
                                placeholder='cooking'
                                onChangeText={props.handleChange('cooking')}/>

                            <Button 
                            title="Lägg till recept" 
                            onPress={props.handleSubmit}/>

                        </View>
                    )}

</Formik>     
        </View>
    );*/
}

const styles = StyleSheet.create({
    
    titel:{
        height:70,
        borderWidth:1,
        borderRadius:15,
        margin:10,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },

    ingredients:{
        height:400,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        marginRight:10,
        marginBottom:30,
        marginTop:20,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },

    cooking: {

    },
   
})