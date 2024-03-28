'use client'
import Header from "@/components/Header";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles'
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { pickerSelectStyles } from "./pickerStyles";
import { router } from "expo-router";
import SvgProfile from "@/components/SvgProfile";
import SvgArrow from "@/components/SvgArrow";

export default function Expanse(){
    const [checked,setChecked] = useState('')
    function openProfile(){
        Alert.alert('ola','ola')
    }

    function goHome(){
        router.push('../')
    }

    function toggleMenu(){
        Alert.alert('ola','ola')   
    }


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

            <Text style={styles.label}>Tipo</Text>
            <View style={styles.radios}>
         
            <View style={styles.radioContainer}>
            <Text style={styles.sm}>Cartão</Text>
            <View style={styles.radio}>
            <RadioButton
            value="sim"
            status={checked === 'sim'? 'checked' : 'unchecked'}
            onPress={()=> setChecked('sim')}
            color="green"
            />
            </View>
            </View>
            
            <View style={styles.radioContainer}>
            <Text style={styles.sm}>Mensal</Text>
            <View style={styles.radio}>
            <RadioButton
            value="nao"
            status={checked === 'nao'? 'checked' : 'unchecked'}
            onPress={()=> setChecked('nao')}
            color="red"
            />
            </View>
            </View>
            </View>

            {checked=== 'sim'?(
            <View style={styles.selectInput}>
                <RNPickerSelect
                onValueChange={(value)=>console.log(value)}
                style={pickerSelectStyles}
                items={[
                {label: "Cartão 1", value:"Cartão 1"},
                {label: "Cartão 2", value:"Cartão 2"},
                {label: "Cartão 3", value:"Cartão 3"},
                ]}
            />
            </View>    
            ):(
                <View>
                </View>  
            )}

            <Pressable style={styles.button}>
                <Text style={styles.textButton}>REGISTRAR DESPESA</Text>
            </Pressable>
           </View>
        </View>
    )
}