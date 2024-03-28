import Header from "@/components/Header";
import { Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles'

export default function Enter(){
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.main}>
                <Text style={styles.subtitle}>Adicionar nova receita</Text>
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
                <Text style={styles.label}>Horario</Text>
                <TextInput
                style={styles.input}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>REGISTRAR RECEITA</Text>
                </Pressable>
            </View>
        </View>
    )
}