import Header from "@/components/Header";
import {Alert, Pressable, Text, TextInput, View } from "react-native";

import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'

import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { getAuth } from "firebase/auth";
import {styles} from '@/styles/enter'

export default function Teste2() {
  const formSchema = z.object({
    title: z.string().min(1, 'O nome é obrigatório.'),
    value: z.string().min(1,'O valor é obrigatório.'),
})

function formatDate(date:Date){
    const day =  String(date.getDate()).padStart(2, '0')
    const month =  String(date.getMonth() + 1).padStart(2, '0')
    const year =  date.getFullYear()

    return `${day}/${month}/${year}`
}

function formatHour(){
    const currentDate = new Date()
    const hour =  String(currentDate.getHours()).padStart(2, '0')
    const minutes =  String(currentDate.getMinutes()).padStart(2, '0')
   
    return `${hour}:${minutes}`
}


const {control,handleSubmit} = useForm({
    defaultValues:{
        title: '',
        value: '',
    },
    resolver: zodResolver(formSchema)
})

type FormData = {
    title: string,
    value: string,
}

const onSubmit = async(data : FormData) =>{
    const auth = getAuth().currentUser?.uid
    const today = new Date()
    const formatedDate = formatDate(today)
    const currentDate = formatHour()
 
    try {
        await addDoc(collection(db,"gains"),{
            gainName: data.title,
            gainValue: data.value,
            ownerGains : auth,
            enterDate: formatedDate,
            hourEnter:currentDate
        })
    Alert.alert("Sucesso" , "Receita criada com sucesso")
    } catch (error) {
       console.log("Erro criando o documento" , error) 
    }
}

return(
    <View style={styles.container}>
       <Header/>
       <View style={styles.main}>
       <Text style={styles.subtitle}>Nova Receita</Text>
        <Text style={styles.label}>Titulo</Text>
        <Controller
            control={control}
            name={'title'}
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
              placeholder = "Nome da Receita"
              />
            </>
            )}
        />
       
        <Text style={styles.label}>Valor</Text>
        <Controller
            control={control}
            name={'value'}
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
              placeholder = "Valor da Receita"
              />
            </>
            )}
        />

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textButton}>ADICIONAR RECEITA</Text>
        </Pressable>
       </View>
    </View>
)
}