import {
    StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight, } from "react-native";
  
  export default function Header() {
    return (
      <SafeAreaView style={styles.container}>
       <Text style={styles.header}>MY HEALTHY MEALS</Text>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({

    container: {
      alignItems:"center",
    },
  
    header: {
      height: 80,
      paddingTop: 30,
      fontSize:30,
      fontWeight:"bold",
      color:"#737373"
    },
  });
  