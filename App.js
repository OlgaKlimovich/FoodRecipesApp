import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './views/MainView';
import BreakfastView from './views/BreakfastView';
import DinnerView from './views/DinnerView';
import LunchView from './views/LunchView';
import SnackView from './views/SnackView';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*function MainView(){
  return(
    <MainView/>
  );
}*/

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BreakfastView'>
        <Stack.Screen name='Main' component={MainView} options={{header: () => null}}/>
        <Stack.Screen name="Breakfast" component={BreakfastView} options={{header: () => null}}/>
        <Stack.Screen name="Lunch" component={LunchView} options={{header: () => null}}/>
        <Stack.Screen name="Dinner" component={DinnerView} options={{header: () => null}}/>
        <Stack.Screen name="Snack" component={SnackView} options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
