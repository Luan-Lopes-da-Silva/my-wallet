import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from "react";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Controller,useForm } from "react-hook-form";



export default function Form(){
    const formSchema = z.object({
        email: z.string().email('Por favor entre com um email valido.'),
        password: z.string().min(1, 'A senha é obrigatória.')
    })

    type schemaForm = {
        email: string,
        password : string
    }

    const {control, handleSubmit} = useForm({
        defaultValues:{
            email: '',
            password: '',
        },
        resolver : zodResolver(formSchema)
    })

    const onSubmit = (data:schemaForm) =>{
        Alert.alert("Sucesso" , JSON.stringify(data))
    }

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
            <Controller
            control={control}
            name={'email'}
            render={({ field: { value, onChange, onBlur }, fieldState: { error }})=>(
            <>
            {error && <Text style={styles.errorMessage}>
                      {error.message}
                      </Text>
            }
            <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder= "email@email.com"
            keybordType = 'default'
            />
            </>
            )}
            />

            <Text style={styles.label}>Senha</Text>
            <Controller
            control={control}
            name={'password'}
            render={({ field: { value, onChange, onBlur }, fieldState: { error }})=>(
            <>
            {error && <Text style={styles.errorMessage}>
                      {error.message}
                      </Text>
            }
            <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder= "**********"
            keybordType = 'numeric'
            />
            </>
            )}
            />
            <View style={styles.others}>
                <Text style={styles.links} onPress={forgetPassword}>Esqueceu sua senha?</Text>
                <Text style={styles.links} onPress={createUser}>Criar Usuario</Text>
            </View>
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textButton}>LOGIN</Text>
            </Pressable>

        </View>
    )
}