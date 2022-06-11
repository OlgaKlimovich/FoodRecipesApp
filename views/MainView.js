import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
         Text, 
         View, 
         SafeAreaView, 
         Image, 
         TouchableOpacity, 
         ImageBackground, } from 'react-native';
import Header from '../components/Header';

export default function MainView({navigation}) {
  return (
    <SafeAreaView >
        <View>
            <Header/>
                <ImageBackground style={styles.mainImg} 
                   source={require('../assets/mainimg.jpg')}>

                 <View style={styles.buttonsBackground}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Breakfast')}>
                            <View style={styles.buttonView}>
                                <Text style={styles.textStyle}>FRUKOST</Text>  
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Lunch')} >
                            <View style={styles.buttonView}>
                                <Text style={styles.textStyle}>LUNCH</Text>  
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('Dinner')}>
                            <View style={styles.buttonView}>
                                <Text style={styles.textStyle}>MIDDAG</Text>  
                             </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Snack')}>
                            <View style={styles.buttonView}>
                                 <Text style={styles.textStyle}>MELLANMÅL</Text>  
                            </View>
                    </TouchableOpacity>
                 </View>
                </ImageBackground>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   
    mainImg: {
        width: "100%",
        height: "100%",
    },

    buttonsBackground:{
        height:"70%",
        justifyContent: "center"
    },

    buttonView: {
        backgroundColor: "#00000099",
        marginHorizontal:10,
        marginVertical: 10,
        padding:10,
        borderRadius: 20,
        height: 130,
        justifyContent:"center",
        alignItems: "center",
    },

    textStyle:{
        color:"#fff",
        fontSize: 35,
    }
})
