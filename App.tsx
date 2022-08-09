import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import "tailwindcss-react-native/types.d";
import FolderScreens from './screens/FolderScreens';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PagesScreen from './screens/PagesScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <TailwindProvider >
            {/* <Stack.Navigator initialRouteName='Home Page'> */}
            <Stack.Navigator>
              <Stack.Screen name="Home" options={{ title: 'Home Page' }} component={HomeScreen} />
                <Stack.Screen name="Notes" component={FolderScreens} />
                <Stack.Screen name="Page" component={PagesScreen}/>
            </Stack.Navigator>
          </TailwindProvider>

      </NavigationContainer>
  );
}
