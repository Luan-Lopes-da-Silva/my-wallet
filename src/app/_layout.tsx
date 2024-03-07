import { Slot } from "expo-router"
import {
    useFonts,
    MsMadi_400Regular
} from "@expo-google-fonts/ms-madi"

import {
Merriweather_400Regular
} from "@expo-google-fonts/merriweather"

import{
Montserrat_400Regular,
Montserrat_500Medium,
Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function Layout(){
    const [fonstLoaded]=useFonts({
        Montserrat_700Bold,
        MsMadi_400Regular,
        Merriweather_400Regular,
        Montserrat_400Regular,
        Montserrat_500Medium
    })

    if(!fonstLoaded){
        return
    }
    return fonstLoaded ? <Slot/> : null
}