import React from "react";
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground } from 'react-native';

export default function DinnerView() {
    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/dinner.jpg')}>
                    <Text style={styles.headerText}>MIDDAG</Text>
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
        color: "#999999",
        marginTop: 30,
        textAlign: "center"
    }
})