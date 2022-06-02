import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';

export default function MainView() {
  return (
    <SafeAreaView >
        
        <View style={styles.background}>
            <Header/>
           
            <ImageBackground style={styles.mainImg} 
                   source={require('../assets/mainimg.jpg')} 
                   
            >
                <View style={styles.buttonsBackground}>
                 <TouchableOpacity>
                <View style={styles.buttonView}>
                    
                    <Text style={styles.textStyle}>FRUKOST</Text>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.buttonView}>
                    
                    <Text style={styles.textStyle}>LUNCH</Text>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.buttonView}>
                    
                    <Text style={styles.textStyle}>MIDDAG</Text>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
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
    background: {
        //width:"100%",
        //height:"100%",
       //backgroundColor:"#ECFC11"
    },

    mainImg: {

        
        width: "100%",
        height: "100%",
        //resizeMode: "contain"
        //justifyContent: "space-between"
    },

    buttonsBackground:{
        height:"70%",
justifyContent: "center"
    },

    buttonView: {
        backgroundColor: "#00000099",
        marginHorizontal:10,
        marginVertical: 20,
        padding:10,
        borderRadius: 20,
        height: 80,
        justifyContent:"center",
        alignItems: "center"
        
        

    },

    textStyle:{
        color:"#fff",
        fontSize: 35,
        
    }

   


})
