import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import MainView from './views/MainView';
import BreakfastView from './views/BreakfastView';
import DinnerView from './views/DinnerView';
import LunchView from './views/LunchView';
import SnackView from './views/SnackView';
import RecipeView from './views/RecipeView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getTableInfo, initDB } from './datebase/Dbutils';

const Stack=createNativeStackNavigator();

export default function App() {

  useEffect(()=>{
    initDB()
    .then(res=>{
      console.log("result from init", res)
      return getTableInfo()
    })
    .then(res=>console.log("pragma table_info", res))
    .catch(err=>console.log(err))
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BreakfastView'>
        <Stack.Screen name='Main' component={MainView} options={{header: () => null}}/>
        <Stack.Screen name="Breakfast" component={BreakfastView} options={{header: () => null}}/>
        <Stack.Screen name="Lunch" component={LunchView} options={{header: () => null}}/>
        <Stack.Screen name="Dinner" component={DinnerView} options={{header: () => null}}/>
        <Stack.Screen name="Snack" component={SnackView} options={{header: () => null}}/>
        <Stack.Screen name="Recipe" component={RecipeView} options={{header: () => null}}/>
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
