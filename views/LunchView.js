import React from "react";
import { StyleSheet,
         Text, 
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground } from 'react-native';

export default function LunchView() {
    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/lunch.jpg')}>
                    <Text style={styles.headerText}>LUNCH</Text>
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
        color: "#bfbfbf",
        marginTop: 30,
        textAlign: "center"
    }
})