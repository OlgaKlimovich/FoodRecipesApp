import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainView from './views/MainView';
import BreakfastView from './views/BreakfastView';
import DinnerView from './views/DinnerView';
import LunchView from './views/LunchView';
import SnackView from './views/SnackView';
import Header from './components/Header';

export default function App() {
  return (
    
    <MainView/>
    
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
