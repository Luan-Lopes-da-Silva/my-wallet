import { View } from "react-native";
import Login from "../login"
import { styles } from "./styles";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from "../(tabs)/home";
import DetailScreen from "../DetailsScreen";



export type RootStackParamList = {
    DetailsScreen: {id: string},
    Home: undefined
}

const Stack = createStackNavigator()

export default function App(){
    return(
        <NavigationContainer independent={true}>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" 
          component={Login} 
          options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="DetailsScreen" component={DetailScreen} />
        </Stack.Navigator>
        </View>
      </NavigationContainer>
    )
}