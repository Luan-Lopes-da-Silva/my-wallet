'use client'
import { theme } from "@/theme";
import { Tabs } from "expo-router";
import { useState,useEffect} from "react";
import { User, getAuth } from "firebase/auth";
import Login from "../login";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout(){
    const [user,setUser] = useState<User | null>(null)
    useEffect(()=>{
        const subscriber = getAuth().onAuthStateChanged(setUser)
        return subscriber
    },[])

    return(
        <>
        {user?(
             <Tabs
             screenOptions={{
                 headerShown:false,
                 tabBarActiveTintColor: "#023047",
                 tabBarInactiveTintColor: "#457b9d",
                 tabBarStyle:{
                     backgroundColor: "#fb8500",
                     minHeight:80,
                     borderTopWidth:0,
                 },
                 tabBarItemStyle:{
                 paddingBottom:12,
                 },
             }}
             initialRouteName="home"
             >
                 <Tabs.Screen 
                 name="home"
                 options={{
                    tabBarIcon:({size,color})=>(
                        <MaterialIcons name="home" size={size} color={color}/>
                    )
                 }}
                 />
                 <Tabs.Screen 
                 name="receita"
                 options={{
                    tabBarIcon:({size,color})=>(
                        <MaterialIcons name="money" size={size} color={color}/>
                    )
                 }}
                 />
                 <Tabs.Screen 
                 name="despesa"
                 options={{
                    tabBarIcon:({size,color})=>(
                        <MaterialIcons name="money-off" size={size} color={color}/>
                    )
                 }}
                 />
                 <Tabs.Screen 
                 name="cartao"
                 options={{
                    tabBarIcon:({size,color})=>(
                        <MaterialIcons name="credit-card" size={size} color={color}/>
                    )
                 }}
                 />
             </Tabs>
        ):(
            <Login/>
        )}
        </>
       
    )
}

