import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, ScrollView} from 'react-native';
import FolderScreens from './screens/FolderScreens';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
        //  <FolderScreens />
       <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='Home Page'> */}
          <Stack.Navigator>
          <Stack.Screen name="Home" options={{ title: 'Home Page' }} component={HomeScreen} />
              <Stack.Screen name="Notes" component={FolderScreens} />
          </Stack.Navigator>
       </NavigationContainer>
  );
}
