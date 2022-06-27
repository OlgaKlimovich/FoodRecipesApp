import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground, 
         Dimensions,
         ScrollView,
         FlatList,
         Modal,
         Alert,
         StatusBar,
         NativeEventEmitter} from 'react-native';
import React, { useState, useEffect } from "react";
import{Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreakfastList from '../RecipeLists/BreakfastList';
import NewRecipeForm from '../components/NewRecipeForm';
import Recipe from '../models/Recipe';
//import { insert } from 'formik';
import {findAll, insert, deleteById} from '../datebase/Dbutils';
import { TextInput } from 'react-native';
import MainView from './MainView';

export default function BreakfastView({navigation}) {

    const [recipe, setBreakfast]=useState(BreakfastList, []);

    const [modalWindow, setModalWindow]=useState(false);
    
    const emitter=new NativeEventEmitter()

    /*const addRecipe=(recipe)=>{
        setBreakfast((list)=>{
            recipe.key=Math.random().toString();
            return[
                recipe,
                ...list
            ]
        });
        setModalWindow(false);
    }*/

    const addRecipe=(recipe)=>{
        //const recipe=new Recipe()
        insert (recipe)
        .then(res=>{
            console.log("insert res", res)
            return findAll()
        })
        .then (res=>setBreakfast(res))
        .catch(err=>console.log(err))
        setBreakfast((list)=>{
            recipe.key=Math.random().toString();
            return[
                recipe,
                ...list
            ]
        });
        setModalWindow(false);

   }

    const deleteRecipe=(id)=>{
        
            deleteById(id)
                //.then(res => emitter.emit('delete', recipe))
                .then (res=>setBreakfast(res))
                .catch(err=>console.log(err))
                setBreakfast((list)=>{
                    
                    return[
                       
                        ...list
                    ]
        });
       
        
    }

    const deleteListener=emitter.addListener('delete',(titel)=>{
        findAll()
            .then(res => setBreakfast(res))
            .catch(err => console.log(err))

    })
    useEffect(() => {
        findAll()
            .then(res => setBreakfast(res))
        return () => deleteListener.remove()
    }, [])

    

       
        

    



    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/breakfast.jpg')}>
                    <Text style={styles.headerText}>FRUKOST</Text>

             <FlatList LisHeaderComponent={ <></>}
                       data={recipe} renderItem={({item})=>(
                         <TouchableOpacity style={styles.buttonView}
                            onPress={()=>navigation.navigate('Recipe',item)}>
                                <Image style={styles.buttonImg} source={item.image}/>
                                <Text style={styles.recipesTitle}>{item.titel}</Text>
                                <Ionicons name='trash' 
                                          style={styles.iconDelete}
                                          onPress={deleteRecipe}/>
                         </TouchableOpacity>
                         )}>
                  ListFooterComponent={ <></>}  
             </FlatList>

             <Ionicons name="add-circle" 
                       style={styles.icon} 
                       onPress={()=>setModalWindow(true)}/>

             <Modal visible={modalWindow}>
                <Ionicons name='close' 
                          style={styles.iconClose}
                          onPress={()=>setModalWindow(false)}/>
                 <NewRecipeForm addRecipe={addRecipe}/>
             </Modal>
         </ImageBackground>
      </SafeAreaView>
    )};

 const styles = StyleSheet.create({
    mainImg: {
        width: "100%",
        height: "100%",             
    },

    headerText: {
        fontSize:40,
        color: "#7e5e60",
        marginTop: 30,
        textAlign: "center",
    },

    scrollView: {

    },

    buttonView: {
        backgroundColor: "#f2f3f499",
        marginHorizontal:10,
        marginVertical: 5,
        padding:8,
        borderRadius: 20,
        height: 80,
        justifyContent:"space-between",
        alignItems: "center",
        flexDirection: "row"
    },

    buttonImg:{
        width: 67,
        height: 67,
        resizeMode: "cover",
        borderRadius: 15,
    },

    recipesTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#4f3a3c",
        width:220,
    },

    icon: {
        color: "#f2f3f499",
        fontSize: 50,
        textAlign:"center",
    },

    iconClose: {
        color: "#696969",
        fontSize: 40,
        textAlign:"center",
    },

    iconDelete:{
        color: "#4f3a3c",
        fontSize: 25,   
    },

    modal: {

    },
})
                