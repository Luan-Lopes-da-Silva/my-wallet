'use client'

import { Pressable, Text, View ,TextInput, Alert} from "react-native";
import { useRoute } from "@react-navigation/native";
import { addDoc,query ,collection,where,getDocs, doc, updateDoc} from "firebase/firestore";
import { db } from "./firebaseConfig";
import React, { useEffect, useState } from "react";
import {styles} from '@/styles/detailsScreen'
import Header from "@/components/Header";
import { theme } from "@/theme";
import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'
import firestore from '@react-native-firebase/firestore';

type Goal = {
    goalTitle: string,
    goalValue: string,
}

export default function DetailsScreen(){
   const route:any = useRoute()
   const {id} = route.params || {}
   const [name,setName] = useState('')
   const [value,setValue] = useState('')
   const [reached,setReached] = useState('')

   const formSchema = z.object({
    incrementValue: z.string().min(1, 'O nome é obrigatório.')
})

const {control,handleSubmit} = useForm({
    defaultValues:{
        incrementValue: '',
        idGoal: '',
    },
    resolver: zodResolver(formSchema)
})

type GoalSchema = {
    incrementValue: string
}


const onSubmit = async (data:GoalSchema) =>{
    const expanseFilter = query(collection(db, "increase-goals"), where("idGoal", "==" , id))

    const querySnapshot = await getDocs(expanseFilter)
    const auxiliarArray:number[]= []
    querySnapshot.forEach((doc)=>{
    const currentGoal = doc.data()
    auxiliarArray.push(Number(currentGoal.incrementValue))
    })
    const sumIncrements = auxiliarArray.reduce((acc,cur)=>{
        return acc+cur
    },0)

    const percentReached = (Number(data.incrementValue) + sumIncrements)/100

    setReached(percentReached)
}

useEffect(()=>{
    async function getGainsGoalFromId() {
        const expanseFilter = query(collection(db, "increase-goals"), where("idGoal", "==" , id))

        const querySnapshot = await getDocs(expanseFilter)
        const auxiliarArray:number[]= []
        querySnapshot.forEach((doc)=>{
        const currentGoal = doc.data()
        auxiliarArray.push(Number(currentGoal.incrementValue))
        })
        const sumIncrements = auxiliarArray.reduce((acc,cur)=>{
            return acc+cur
        },0)

        const percentReached = sumIncrements/100
        setReached(`${percentReached}`)    
        }

        getGainsGoalFromId()
   },[])
    

   useEffect(()=>{
    async function getGoalFromId() {
        const expanseFilter = query(collection(db, "goals"), where("id", "==" , id))

        const querySnapshot = await getDocs(expanseFilter)

        querySnapshot.forEach((doc)=>{
        const currentGoal = doc.data()
        const newItem:Goal= {
            goalTitle : currentGoal.goalTitle,
            goalValue : currentGoal.goalValue,
        }

        setName(newItem.goalTitle)
        setValue(newItem.goalValue)
        })
        }

        getGoalFromId()
   },[])


    return(
    <View style={styles.container}>
        <Header/>
        <View style={styles.infos}>
        <Text style={styles.titleGoal}>{name}</Text>
        <Text style={styles.titleValue}>{value}</Text>
        <View style={styles.progressBar}>
            <View 
            style={{position:'absolute',
            backgroundColor:theme.colors.gains,
            height:30,
            borderRadius: theme.borderRadius.lg,
            }}
            >
            </View>
        </View>
        <Text style={styles.titleReached}>{reached}%</Text>
        
        <View>
            <Text style={styles.subtitle}>Incrementar meta</Text>
            <Text style={styles.label}>Valor</Text>
            <Controller
            control={control}
            name={'incrementValue'}
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
                <Text style={styles.textButton}>Incrementar</Text>
            </Pressable>
        </View>
        
        </View>

       
    </View>
)
}