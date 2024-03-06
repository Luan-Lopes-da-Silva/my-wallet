import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from "react";

export default function Form(){
    async function verifyAvailableAuthentication(){
    const hardware = await LocalAuthentication.hasHardwareAsync()
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    console.log(types)
    console.log(hardware)
    }

    useEffect(()=>{
        verifyAvailableAuthentication()
    },[])

    function forgetPassword(){
        router.push('/forgePassword/')
    }

    function createUser(){
        router.push('/create/')
    }

    async function handleLogin(){
        const hasFingerPrint =  await LocalAuthentication.isEnrolledAsync()
        if(!hasFingerPrint){
        Alert.alert('Login','Nenhuma Biometria foi encontrada')
        }

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login Com Biometria',
            fallbackLabel: 'Biometria não reconhecida'
        })

        if(auth.success){
        Alert.alert('Login','Login realizado com sucesso')
        setTimeout(() => {
            router.push('/home/')
        }, 2000);
        }
        
    }

    return(
        <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
            placeholder="email@email.com"
            keyboardType="default"
            style={styles.input}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
            placeholder="********"
            keyboardType="numeric"
            style={styles.input}
            />
            <View style={styles.others}>
                <Text style={styles.links} onPress={forgetPassword}>Esqueceu sua senha?</Text>
                <Text style={styles.links} onPress={createUser}>Criar Usuario</Text>
            </View>
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.textButton}>LOGIN</Text>
            </Pressable>

        </View>
    )
}