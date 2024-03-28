import Header from "@/components/Header";
import { Text, View } from "react-native";
import {styles} from './styles'

export default function Enter(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>Entradas</Text>
        </View>
    )
}