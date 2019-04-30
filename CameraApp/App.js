import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import camera from './screens/camera';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Camera: { screen: camera}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
