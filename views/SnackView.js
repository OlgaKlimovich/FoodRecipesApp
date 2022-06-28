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
import {findAllSnack, insertSnack, deleteSnackById} from '../datebase/Dbutils';

export default function SnackView({navigation}) {

const [snack, setSnack]=useState([]);

const [modalWindow, setModalWindow]=useState(false);

const emitter=new NativeEventEmitter()

const addRecipe=(snack)=>{
insertSnack (snack)
.then(res=>{
  console.log("insert res", res)
  return findAllSnack()
})
.then (res=>setSnack(res))
.catch(err=>console.log(err))
setSnack((list)=>{
  snack.key=Math.random().toString();
  return[
      snack,
      ...list
  ]
});
setModalWindow(false);
}

const deleteSnack=(id)=>{
console.log("id" ,id)
deleteSnackById(id)
.then(res=>findAllSnack())
.then(res=>setSnack(res))
.catch (err=>console.log(err))    
}

const deleteListener=emitter.addListener('delete',(titel)=>{
findAllSnack()
.then(res=>setSnack(res))
.catch (err=>console.log(err)) 
})

useEffect(()=>{
findAllSnack()
.then(res=>setSnack(res))
return()=>deleteListener.remove() 
},[])

return (
<SafeAreaView >
<ImageBackground 
                      style={styles.mainImg} 
                      source={require('../assets/snack.jpg')}>
                          <Text style={styles.headerText}>MELLANMÅL</Text>
      
      
   <FlatList ListHeaderComponent={ <></>}
             data={snack} 
             renderItem={({item})=>{
             console.log("item", item)
              return(
               <TouchableOpacity style={styles.buttonView}
                  onPress={()=>navigation.navigate('Recipe',item)}>
                      <Text style={styles.recipesTitle}>{item.titel}</Text>
                      <Ionicons name='trash' 
                                style={styles.iconDelete}
                                onPress={()=>deleteSnack(item.id)}/>
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
color:  "#7b3f00",
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
      