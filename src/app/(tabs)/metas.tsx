'use client'

import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import { getAuth } from "firebase/auth";
import { Alert, Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from '@/styles/meta'
import Header from '@/components/Header'
import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'

export default function meta() {
    const formSchema = z.object({
        goalTitle: z.string().min(1, 'O nome é obrigatório.'),
        goalValue: z.string().min(1,'O valor é obrigatório.'),
    })
    
    
    const {control,handleSubmit} = useForm({
        defaultValues:{
            goalTitle: '',
            goalValue: '',
            reached: '',
            goalOwner: '',
            randomId: ''
        },
        resolver: zodResolver(formSchema)
    })

    function generateRandomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters.charAt(randomIndex);
        }
      
        return randomId;
      }
    
    type FormData = {
      goalTitle: string,
      goalValue: string,
      reached: string,
      goalOwner: string,
      randomId: string
    }
    
    const onSubmit = async (data : FormData) =>{
        const auth = getAuth().currentUser?.uid
        const randomID = generateRandomId()
        try {
            await addDoc(collection(db,"goals"),{
                goalTitle: data.goalTitle,
                goalValue: data.goalValue,
                reached : `0%`,
                goalOwner: auth,
                id: randomID
            })
        Alert.alert("Sucesso" , "Meta criada com sucesso")
        } catch (error) {
           console.log("Erro criando o documento" , error) 
        }  
    }


  return (
    <View style={styles.container}>
    <Header/>
    <View style={styles.main}>
    <Text style={styles.subtitle}>Nova Meta</Text>
     <Text style={styles.label}>Titulo</Text>
     <Controller
         control={control}
         name={'goalTitle'}
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
           placeholder = "Titulo da meta"
           />
         </>
         )}
     />
    
     <Text style={styles.label}>Valor</Text>
     <Controller
         control={control}
         name={'goalValue'}
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
           placeholder = "Valor da meta"
           />
         </>
         )}
     />
     <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
         <Text style={styles.textButton}>ADICIONAR META</Text>
     </Pressable>
    </View>
 </View>
  )
}