import Header from "@/components/Header";
import { Text, TextInput, View ,Pressable} from "react-native";
import {styles} from './styles'

export default function newCard(){
    return(
        <View style={styles.container}>
            <Header/>
           <View style={styles.main}>
           <Text style={styles.subtitle}>Adicionar novo cartão</Text>
            <Text style={styles.label}>Nome do Cartão</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Saldo do Cartão</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Data de vencimento da fatura</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Selecionar bandeira do cartão</Text>
            <TextInput
            style={styles.input}
            />

            <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRAR CARTÃO</Text>
            </Pressable>
           </View>
        </View>
    )
}