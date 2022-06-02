import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';


export default function BreakfastView() {
    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/breakfast.jpg')}>
                    <Text style={styles.headerText}>FRUKOST</Text>
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
        color: "#bfbfbf",
        marginTop: 30,
        textAlign: "center"
    }
})
                