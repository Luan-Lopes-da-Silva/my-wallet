import Header from "@/components/Header";
import { Text, TextInput, View ,Pressable} from "react-native";
import {styles} from './styles'
import RNPickerSelect from "react-native-picker-select";
import { pickerSelectStyles } from "./pickerStyles";

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
            <RNPickerSelect
                onValueChange={(value)=>console.log(value)}
                style={pickerSelectStyles}
                items={[
                {label: "Mastercard", value:"Mastercard"},
                {label: "Visa", value:"Visa"},
                {label: "Elo", value:"Elo"},
                ]}
            />

            <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRAR CARTÃO</Text>
            </Pressable>
           </View>
        </View>
    )
}

