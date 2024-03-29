import { Text, View } from "react-native";
import { Home } from "../home";
import {Login} from "../login"
import { styles } from "./styles";
import Splash from "@/components/Splash/Splash";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App(){
    const [splashComplete,setSplashComplete] = useState(false)
    return(
        
        <View style={styles.container}>
            {splashComplete? <Login/>: <Splash onComplete={setSplashComplete}/>}
        </View>
    )
}