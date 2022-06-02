import {
    StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight,
  } from "react-native";
  
  
  export default function Header() {
    return (
      <SafeAreaView style={styles.container}>
       <Text style={styles.header}>MIN RECEPTBOK</Text>
      </SafeAreaView>);
  
  }
  
  const styles = StyleSheet.create({
    container: {
      
  alignItems:"center",
      //justifyContent: "center",
     
  
    },
  
    header: {
      //marginTop: 40,
      //width: "100%",
      height: 80,
      paddingTop: 30,
      fontSize:30,
      fontWeight:"bold",
      //fontFamily:"monospace",
      color:"#737373"

      
      //alignItems: "center",
      //justifyContent: "flex-end",
  
    },
  
  
  });
  