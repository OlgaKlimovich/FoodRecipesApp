import { SafeAreaView,
    Text, 
    StyleSheet,
    ScrollView, 
    View, 
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    TextInput,
    ImageBackground,
    Dimensions,
    Image } 
    from "react-native";

import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
import {Field, Formik} from 'formik';


export default function NewRecipeForm({addRecipe}) {

    return(
        
        <ScrollView>
        <ImageBackground 
        style={styles.mainImg} 
        source={require('../assets/matingredienser.jpg')}>
        
            
         <Formik  
                initialValues={{titel:'', image:'', ingredients:'', cooking:''}}
                onSubmit={(values, action)=>{
                    addRecipe(values);
                    action.resetForm();
                    console.log(values);
                    
                }}>




                    {(props)=>(
                        <View style={styles.formView}>
                            <TextInput multiline
                                style={styles.titel}
                                value={props.values.titel}
                                placeholder='Rättens titel'
                                onChangeText={props.handleChange('titel')}/>

                            <TextInput
                                
                                style={styles.image}
                                value={props.values.image}
                                placeholder='Bild'
                                onChangeText={props.handleChange('image')}/>

                            <TextInput multiline
                                style={styles.ingredients}
                                value={props.values.ingredients}
                                placeholder='Ingredients'
                                onChangeText={props.handleChange('ingredients')}/>

                            <TextInput multiline
                                style={styles.cooking}
                                value={props.values.cooking}
                                placeholder='Cooking'
                                onChangeText={props.handleChange('cooking')}/>

                            <Button
                            style={styles.addButton}
                            title="Lägg till recept" 
                            onPress={props.handleSubmit}/>
</View>
                        
                    )}


</Formik>   
  
        
        
       </ImageBackground>
       </ScrollView>
    
    );
}

const styles = StyleSheet.create({

    formView:{
        height: Dimensions.get('window'). height, 
    },
    
    titel:{
        height:50,
        borderRadius:10,
        margin:10,
        paddingHorizontal: 10,
        textAlignVertical:"center",
        backgroundColor:"#f2f3f499",
        fontSize: 20,
    },

    image: {
        height:50,
        borderRadius:10,
        margin:10,
        paddingHorizontal: 10,
        textAlignVertical:"center",
        backgroundColor:"#f2f3f499",
        fontSize: 20,
    },

    ingredients:{
        height:200,
        borderRadius:10,
        margin:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 20,
    },

    cooking: {
        height:200,
        borderRadius:10,
        margin:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 20,
    },

    addButton: {
        fontSize: 20,
        
    },
   
})