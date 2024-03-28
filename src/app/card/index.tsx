import Header from "@/components/Header";
import { Text, View } from "react-native";
import {styles} from './styles'

export default function newCard(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text>Novo Cartão</Text>
        </View>
    )
}