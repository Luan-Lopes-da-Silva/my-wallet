import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"
import React from "react"
import  Home  from "../../app/home/index"
import { Tabs } from "expo-router"

const Tab = createBottomTabNavigator()

export function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    
    )
}