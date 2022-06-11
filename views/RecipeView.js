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
      paddingTop: 30,
      paddingBottom:15,
      paddingHorizontal:10,
      fontSize:30,
      fontWeight:"bold",
      color:"#737373",
      textAlign: "center",            
    },

    recipesImg: {
      height: 300,
      width:"100%",
      resizeMode: "cover",
    },

    recipesIngrediens:{
      paddingVertical: 20,
      fontSize:17,
      fontStyle:"italic",
      color:"#737373",
      textAlign: "center", 
      paddingHorizontal:20,  
    },

    cooking: {
      paddingVertical: 20,
      fontSize:17,
      color:"#737373",
      textAlign: "center",  
      paddingHorizontal:20,
    },
})