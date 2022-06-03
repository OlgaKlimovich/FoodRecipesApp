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
         Modal, } from 'react-native';
import React, { useState } from "react";
import{Ionicons} from '@expo/vector-icons';
import BreakfastList from '../RecipeLists/BreakfastList';
import NewRecipeForm from '../components/NewRecipeForm';


export default function BreakfastView() {

    const [breakfast, setBreakfast]=useState([{BreakfastList}]);

    const [modalWindow, setModalWindow]=useState(false);

    const addBreakfast=(breakfast)=>{
        setBreakfast((list)=>{
            breakfast.key=Math.random().toString();
            return[
                breakfast,
                ...list
            ]
        });
        setModalWindow(false);
    };

    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/breakfast.jpg')}>
                    <Text style={styles.headerText}>FRUKOST</Text>

                    <ScrollView style={styles.scrollView}>

        <FlatList data={BreakfastList} renderItem={({item})=>(
            
                <TouchableOpacity style={styles.buttonView}>

                    <Image style={styles.buttonImg} source={item.image}/>

                    <Text style={styles.recipesTitle}>{item.titel}</Text>
                    
                </TouchableOpacity>
        )}>
        </FlatList>

          <Ionicons name="add-circle" 
                  style={styles.icon} 
                  onPress={()=>setModalWindow(true)}/>

        <Modal visible={modalWindow} >
            <View style={styles.modal}>
                <Ionicons name="close-circle" 
                          style={styles.icon}
                          onPress={()=>setModalWindow(false)}/>
                <NewRecipeForm addBreakfast={addBreakfast}/>
            </View>
        </Modal>


        </ScrollView>
          </ImageBackground>
      </SafeAreaView>
    )};

 const styles = StyleSheet.create({
    mainImg: {
        width: "100%",
        height: "100%", 
        //width: Dimensions.get('window'). width,   
        //height: Dimensions.get('window'). height,            
    },

    headerText: {
        fontSize:40,
        color: "#7e5e60",
        marginTop: 30,
        textAlign: "center"
    },

    scrollView: {

    },

    buttonView: {
        backgroundColor: "#f2f3f499",
        marginHorizontal:10,
        marginVertical: 10,
        padding:8,
        borderRadius: 20,
        height: 80,
        justifyContent:"space-between",
        alignItems: "center",
        flexDirection: "row"
    },

    buttonImg:{
        //margin:1,
        width: 67,
        height: 67,
        resizeMode: "cover",
        borderRadius: 15,
    },

    recipesTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#4f3a3c",
    },

    icon: {
        color: "#f2f3f499",
        fontSize: 50,
        textAlign:"center",
    },

    modal: {

    },
})
                