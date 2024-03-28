import Header from "@/components/Header";
import { Text, View } from "react-native";
import {styles} from './styles'

export default function Expanse(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>Despesas</Text>
        </View>
    )
}