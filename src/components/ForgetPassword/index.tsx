import { Pressable, Text, TextInput, View ,Alert} from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { useState } from "react";

export default function ForgetPassword(){
    const [email,setEmail] = useState('')
    function previousPage(){
        router.back()
    }
    
    function changePassword(){
       const auth = getAuth()
       sendPasswordResetEmail(auth,email)
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
            <TextInput
            placeholder="email@email.com"
            keyboardType="default"
            style={styles.input}
            value={email}
            onChangeText={email=>setEmail(email)}
            />
            <Pressable style={styles.button} onPress={changePassword}>
                <Text style={styles.textButton}>TROCAR SENHA</Text>
            </Pressable>

        </View>
    )
}