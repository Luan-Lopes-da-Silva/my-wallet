import Header from "@/components/Header";
import { Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles'

export default function Expanse(){
    return(
        <View style={styles.container}>
            <Header/>
           <View style={styles.main}>
           <Text style={styles.subtitle}>Adicionar nova despesa</Text>
            <Text style={styles.label}>Titulo</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Valor</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Data</Text>
            <TextInput
            style={styles.input}
            />
            <Text style={styles.label}>Horário</Text>
            <TextInput
            style={styles.input}
            />

            <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRAR DESPESA</Text>
            </Pressable>
           </View>
        </View>
    )
}