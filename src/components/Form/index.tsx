import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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

    const onSubmit = async (data:schemaForm) =>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((userCredentials)=>{
            const user = userCredentials.user
            console.log(user)
            Alert.alert('Login efetuado com sucesso', `Login efetuado com sucesso`)
            setTimeout(() => {
                router.push('/home/')
            }, 1000);
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    
    function forgetPassword(){
        router.push('/forgePassword/')
    }

    function createUser(){
        router.push('/create/')
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
            keyboardType = 'default'
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
            keyboardType = 'default'
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