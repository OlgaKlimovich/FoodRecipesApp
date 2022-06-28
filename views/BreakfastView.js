import { StyleSheet, 
         Text, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground, 
         FlatList,
         Modal,
         NativeEventEmitter} from 'react-native';
import React, { useState, useEffect } from "react";
import{Ionicons} from '@expo/vector-icons';
import NewRecipeForm from '../components/NewRecipeForm';
import Recipe from '../models/Recipe';
import {findAll, insert, deleteById} from '../datebase/Dbutils';

export default function BreakfastView({navigation}) {

    const [recipe, setBreakfast]=useState([]);

    const [modalWindow, setModalWindow]=useState(false);
    
    const emitter=new NativeEventEmitter()

    const addRecipe=(recipe)=>{
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
     console.log("id" ,id)
          deleteById(id)
          .then(res=>findAll())
          .then(res=>setBreakfast(res))
          .catch (err=>console.log(err))    
    }

    const deleteListener=emitter.addListener('delete',(titel)=>{
        findAll()
        .then(res=>setBreakfast(res))
        .catch (err=>console.log(err)) 
    })

    useEffect(()=>{
        findAll()
        .then(res=>setBreakfast(res))
        return()=>deleteListener.remove() 
    },[])

    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/breakfast.jpg')}>
                    <Text style={styles.headerText}>FRUKOST</Text>

             <FlatList ListHeaderComponent={ <></>}
                       data={recipe} 
                       renderItem={({item})=>{
                       console.log("item", item)
                        return(
                         <TouchableOpacity style={styles.buttonView}
                            onPress={()=>navigation.navigate('Recipe',item)}>
                                <Image style={styles.buttonImg} source={item.image}/>
                                <Text style={styles.recipesTitle}>{item.titel}</Text>
                                <Ionicons name='trash' 
                                          style={styles.iconDelete}
                                          onPress={()=>deleteRecipe(item.id)}/>
                         </TouchableOpacity>)
                         }}>
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

})
                