import {  
    StyleSheet,
    ScrollView, 
    View,
    Button,
    TextInput,
    ImageBackground,
    Dimensions} from "react-native";
import React from "react";
import {Formik} from 'formik';


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
                                placeholder='Rättens namn'
                                onChangeText={props.handleChange('titel')}/>

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
        height:80,
        marginVertical:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 15,
    },

    image: {
        height:50,
        marginVertical:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 15,
    },

    ingredients:{
        height:200,
        marginVertical:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 15,
    },

    cooking: {
        height:200,
        marginVertical:10,
        paddingHorizontal: 10,
        textAlignVertical:"top",
        backgroundColor:"#f2f3f499",
        fontSize: 15,
    },

    addButton: {
        
    },
   
})