import { StyleSheet, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    ImageBackground, 
    FlatList,
    Modal,
    NativeEventEmitter} from 'react-native';
import React, { useState, useEffect } from "react";
import{Ionicons} from '@expo/vector-icons';
import NewRecipeForm from '../components/NewRecipeForm';
import {findAllDinner, insertDinner, deleteDinnerById} from '../datebase/Dbutils';

export default function DinnerView({navigation}) {

const [dinner, setDinner]=useState([]);

const [modalWindow, setModalWindow]=useState(false);

const emitter=new NativeEventEmitter()

const addRecipe=(dinner)=>{
   insertDinner (dinner)
    .then(res=>{
       console.log("insert res", res)
       return findAllDinner()
    })
    .then (res=>setDinner(res))
    .catch(err=>console.log(err))
     setDinner((list)=>{
       dinner.key=Math.random().toString();
       return[
           dinner,
           ...list
       ]
    });
    setModalWindow(false);
}

const deleteDinner=(id)=>{
console.log("id" ,id)
     deleteDinnerById(id)
     .then(res=>findAllDinner())
     .then(res=>setDinner(res))
     .catch (err=>console.log(err))    
}

const deleteListener=emitter.addListener('delete',(titel)=>{
   findAllDinner()
   .then(res=>setDinner(res))
   .catch (err=>console.log(err)) 
})

useEffect(()=>{
   findAllDinner()
   .then(res=>setDinner(res))
   return()=>deleteListener.remove() 
},[])

return (
 <SafeAreaView >
     <ImageBackground 
                           style={styles.mainImg} 
                           source={require('../assets/dinner.jpg')}>
                               <Text style={styles.headerText}>MIDDAG</Text>
           

        <FlatList ListHeaderComponent={ <></>}
                  data={dinner} 
                  renderItem={({item})=>{
                  console.log("item", item)
                   return(
                    <TouchableOpacity style={styles.buttonView}
                       onPress={()=>navigation.navigate('Recipe',item)}>
                           <Text style={styles.recipesTitle}>{item.titel}</Text>
                           <Ionicons name='trash' 
                                     style={styles.iconDelete}
                                     onPress={()=>deleteDinner(item.id)}/>
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
           