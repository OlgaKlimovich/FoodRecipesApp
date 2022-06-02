import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function SnackView() {
    return (
      <SafeAreaView >
          <ImageBackground 
                style={styles.mainImg} 
                source={require('../assets/snack.jpg')}>
                    <Text style={styles.headerText}>MELLANMÅL</Text>
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
        color: "#f5f5f5",
        marginTop: 30,
        textAlign: "center"
    }
})