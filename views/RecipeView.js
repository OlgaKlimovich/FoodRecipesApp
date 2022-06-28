import React from "react";
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         ScrollView } from "react-native";

export default function RecipeView({route}) {
    return (
      <SafeAreaView>
          <ScrollView>
               <View>
                    <Text style={styles.recipesTitle}>{route.params.titel}</Text>
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