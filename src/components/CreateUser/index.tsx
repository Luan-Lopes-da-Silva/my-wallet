import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";


export default function CreateUser(){
    const formSchema = z.object({
        name: z.string().min(1, 'O nome é obrigatório.'),
        email: z.string().email('Por favor entre com um email valido.'),
        password: z.string().min(1, 'A senha é obrigatória.'),
        confirm_password: z.string().min(1, "A confirmação é obrigatória")
    }).refine(({ password, confirm_password}) => password === confirm_password, {
        message: "Senhas não combinam",
        path: ["confirm_password"]
    })

    const {control,handleSubmit} = useForm({
        defaultValues:{
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        resolver: zodResolver(formSchema)
    })

    type UserSchema = {
        name: string,
        email: string,
        password: string
    }

    const onSubmit = async (data:UserSchema) =>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then(()=>{
            Alert.alert('Sucesso', 'Usuario criado com sucesso verifique sua caixa de spams para verificar seu email.')
        })
    }

    function handleBackPage(){
        router.back()
    }


    return(
        <View style={styles.container}>
            <MaterialIcons
            size={32}
            name="arrow-back"
            style={styles.backArrow}
            onPress={handleBackPage}
            />
            <Text style={styles.title}>MyWallet</Text>
            <View>
                <Text style={styles.subtitle}>Registro de usuario</Text>
                <Text style={styles.label}>Nome</Text>
                <Controller
                control={control}
                name={'name'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
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
                keyboardType = 'default'
                placeholder = 'Seu nome'
                />
                </>
                )}
                />

                <Text style={styles.label}>Email</Text>
                <Controller
                control={control}
                name={'email'}
                render={({ field: { onBlur,value,onChange }, fieldState: { error }})=>(
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
                keyboardType = 'email-address'
                placeholder = 'emai@email.com'
                />
                </>
                )}
                />

                <Text style={styles.label}>Senha</Text>
                <Controller
                control={control}
                name={'password'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
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
                keyboardType = 'numeric'
                placeholder = '*******'
                />
                </>
                )}
                />
                <Text 
                style={styles.label}
                >Confirmar senha</Text>
                    <Controller
                control={control}
                name={'confirm_password'}
                render={({ field: { onBlur ,onChange,value}, fieldState: { error }})=>(
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
                keyboardType = 'numeric'
                placeholder = '*******'
                />
                </>
                )}
                />
                <Pressable 
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
                >
                    <Text 
                    style={styles.textButton}
                    >REGISTRAR</Text>
                </Pressable>
            </View>
        </View>
    )
}