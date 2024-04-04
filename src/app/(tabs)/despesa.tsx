'use client'

import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { getAuth } from "firebase/auth";
import Header from "@/components/Header";
import {Alert, Pressable, Text, TextInput, View } from "react-native";
import {styles} from '@/styles/expanse'

import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'

export default function Teste() {
  function formatHour(){
    const currentDate = new Date()
    const hour =  String(currentDate.getHours()).padStart(2, '0')
    const minutes =  String(currentDate.getMinutes()).padStart(2, '0')
   
    return `${hour}:${minutes}`
}

const formSchema = z.object({
    title: z.string().min(1, 'O nome é obrigatório.'),
    value: z.string().min(1,'O valor é obrigatório.'),
    payment: z.string().min(1,'A data de pagamento é obrigatório.'),
})


const {control,handleSubmit} = useForm({
    defaultValues:{
        title: '',
        value: '',
        payment: '',
        hourEnter: ''
    },
    resolver: zodResolver(formSchema)
})

type FormData = {
    title: string,
    value: string,
    payment: string,
    hourEnter: string
}

const onSubmit = async (data : FormData) =>{
    const auth = getAuth().currentUser?.uid
    const currentHour =  formatHour()
    try {
        await addDoc(collection(db,"expanses"),{
            expanseName: data.title,
            expanseValue: data.value,
            ownerExpanse : auth,
            paymentData: data.payment,
            hourEnter : currentHour
        })
    Alert.alert("Sucesso" , "Despesa criada com sucesso")
    } catch (error) {
       console.log("Erro criando o documento" , error) 
    }  
}


return(
    <View style={styles.container}>
       <Header/>
       <View style={styles.main}>
       <Text style={styles.subtitle}>Nova Despesa</Text>
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
              placeholder = "Titulo da despesa"
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
              placeholder = "Valor da despesa"
              />
            </>
            )}
        />

        <Text style={styles.label}>Data de pagamento</Text>
        <Controller
            control={control}
            name={'payment'}
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
              placeholder = "DD/MM/AAAA"
              />
            </>
            )}
        />
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textButton}>ADICIONAR DESPESA</Text>
        </Pressable>
       </View>
    </View>
)}