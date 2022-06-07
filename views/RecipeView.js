import React from "react";
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground,
         FlatList,
         ScrollView } from "react-native";
import BreakfastList from '../RecipeLists/BreakfastList';

export default function RecipeView({route}) {
    return (
      <SafeAreaView>
          <ScrollView>
               <View>
                    <Text style={styles.recipesTitle}>{route.params.titel}</Text>
                    <Image style={styles.recipesImg} source={route.params.image}/>
                    <Text style={styles.recipesIngrediens}>{route.params.ingredients}</Text>
                    <Text style={styles.cooking}>{route.params.cooking}</Text>
               </View>
          </ScrollView>
      </SafeAreaView>
      
    )};

 const styles = StyleSheet.create({
    recipesTitle: {
      height: 80,
      paddingTop: 30,
      marginHorizontal:10,
      fontSize:30,
      fontWeight:"bold",
      color:"#737373",
      textAlign: "center",            
    },

    recipesImg: {
      height: 250,
      width: "90%",
      margin:10,
      //padding:10,
      borderRadius: 20,
      resizeMode: "cover",
    },

    recipesIngrediens:{
      height: 130,
      paddingVertical: 10,
      fontSize:17,
      fontStyle:"italic",
      color:"#737373",
      textAlign: "center", 
      marginHorizontal:20,  
    },

    cooking: {
      height: 230,
      paddingVertical: 10,
      fontSize:17,
      color:"#737373",
      textAlign: "center",  
      marginHorizontal:20,
    },
})