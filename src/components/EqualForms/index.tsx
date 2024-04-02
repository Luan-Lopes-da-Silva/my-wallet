'use client'
import Header from "@/components/Header";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles'
import { useState } from "react";
import { router } from "expo-router";
import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'

interface Props{
subTitle: string,
buttonTitle: string,
firstPlaceHolder: string,
secondPlaceHolder: string
}

export default function EqualForms(props:Props){
    const formSchema = z.object({
        title: z.string().min(1, 'O nome é obrigatório.'),
        value: z.string().min(1,'O valor é obrigatório.'),
    })


    const {control,handleSubmit} = useForm({
        defaultValues:{
            title: '',
            value: ''
        },
        resolver: zodResolver(formSchema)
    })

    type FormData = {
        title: string,
        value: string
    }

    const onSubmit = (data : FormData) =>{
        console.log(data)
    }

    return(
        <View style={styles.container}>
           <Header/>
           <View style={styles.main}>
           <Text style={styles.subtitle}>{props.subTitle}</Text>
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
                  placeholder = {props.firstPlaceHolder}
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
                  placeholder = {props.secondPlaceHolder}
                  />
                </>
                )}
            />

            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textButton}>{props.buttonTitle}</Text>
            </Pressable>
           </View>
        </View>
    )
}