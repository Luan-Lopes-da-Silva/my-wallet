import { Pressable, Text, TextInput, View ,Alert} from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { useState } from "react";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Controller,useForm } from "react-hook-form";

export default function ForgetPassword(){
    const [email,setEmail] = useState('')
    const formSchema = z.object({
        email:z.string().email('Por favor entre com um email valido.')
    })

    type schemaForm = {
        email: string,
    }

    const {control, handleSubmit} = useForm({
        defaultValues:{
            email:'',
        },
        resolver:zodResolver(formSchema)
    })

    function previousPage(){
        router.back()
    }
    
    function changePassword(data: schemaForm){
       const auth = getAuth()
       sendPasswordResetEmail(auth,data.email)
       .then(()=>{
        Alert.alert('Sucesso', 'Verifique sua caixa de email especialmente sua caixa de spams.')
       })
       .catch((error)=>{
        Alert.alert('Erro', `Erro no envio do email de redefinição verifique seu email ${error}`)
       })
    }

    return(
        <View>
            <MaterialIcons
            name="arrow-back"
            size={32}
            onPress={previousPage}
            style={styles.icon}
            />
            <Text style={styles.title}>MyWallet</Text>
            <Text style={styles.subtitle}>Recuperar senha</Text>
            <Text style={styles.label}>Email</Text>
            <Controller
            control = {control}
            name= {'email'}
            render={({field:{value, onChange,onBlur},fieldState:{error}})=>(
                <>
                {error && <Text style={styles.errorMessage}>
                      {error.message}
                      </Text>
                }
                <TextInput
                placeholder="email@email.com"
                keyboardType="default"
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
                </>
            )}
            />
            
            <Pressable style={styles.button} onPress={handleSubmit(changePassword)}>
                <Text style={styles.textButton}>TROCAR SENHA</Text>
            </Pressable>

        </View>
    )
}