import { ScrollView, Pressable, StatusBar, Text, View, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import Header from "@/components/Header";
import { Path, Svg } from "react-native-svg";
import { useEffect, useRef, useState} from "react";
import { router } from "expo-router";
import {getAuth} from 'firebase/auth'

export default function Home(){
    const [isVerified,setIsVerified] = useState('')


    useEffect(()=>{
        function currentUser(){
            const auth = getAuth()
            const user = auth.currentUser
            if(user){
                if(user.emailVerified){
                    setIsVerified('Foi verificado')
                }else{
                    setIsVerified('Não foi verificado')
                }
            }else{
                Alert.alert('Erro', 'Não tem nenhum usuario autenticado.')
                router.push('/login/')
            }
        }
        currentUser()
    },[])
    const refSvg = useRef<any>(null)
    const refText = useRef<any>(null)
    const [balance,setBalance] = useState('R$ 5000,00')
    const [width,setWidth] = useState('40') 
    const [height,setHeight] = useState('35') 
    const [viewBox,setViewBox] = useState('0 0 22 15') 
    const [path,setPath] = useState("M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z")
    
    function newEnter(){
    router.push('/enter/')    
    }

    function newExpanse(){
    router.push('/expanse/')
    }

    function newCard(){
    router.push('/card/')
    }

    let count = 0
    function showBalance(){
    count++
    if(count%2==1){
        setBalance('** *******')
        setPath("M11 12C12.25 12 13.3125 11.5625 14.1875 10.6875C15.0625 9.8125 15.5 8.75 15.5 7.5C15.5 6.25 15.0625 5.1875 14.1875 4.3125C13.3125 3.4375 12.25 3 11 3C9.75 3 8.6875 3.4375 7.8125 4.3125C6.9375 5.1875 6.5 6.25 6.5 7.5C6.5 8.75 6.9375 9.8125 7.8125 10.6875C8.6875 11.5625 9.75 12 11 12ZM11 10.2C10.25 10.2 9.6125 9.9375 9.0875 9.4125C8.5625 8.8875 8.3 8.25 8.3 7.5C8.3 6.75 8.5625 6.1125 9.0875 5.5875C9.6125 5.0625 10.25 4.8 11 4.8C11.75 4.8 12.3875 5.0625 12.9125 5.5875C13.4375 6.1125 13.7 6.75 13.7 7.5C13.7 8.25 13.4375 8.8875 12.9125 9.4125C12.3875 9.9375 11.75 10.2 11 10.2ZM11 15C8.56667 15 6.35 14.3208 4.35 12.9625C2.35 11.6042 0.9 9.78333 0 7.5C0.9 5.21667 2.35 3.39583 4.35 2.0375C6.35 0.679167 8.56667 0 11 0C13.4333 0 15.65 0.679167 17.65 2.0375C19.65 3.39583 21.1 5.21667 22 7.5C21.1 9.78333 19.65 11.6042 17.65 12.9625C15.65 14.3208 13.4333 15 11 15ZM11 13C12.8833 13 14.6125 12.5042 16.1875 11.5125C17.7625 10.5208 18.9667 9.18333 19.8 7.5C18.9667 5.81667 17.7625 4.47917 16.1875 3.4875C14.6125 2.49583 12.8833 2 11 2C9.11667 2 7.3875 2.49583 5.8125 3.4875C4.2375 4.47917 3.03333 5.81667 2.2 7.5C3.03333 9.18333 4.2375 10.5208 5.8125 11.5125C7.3875 12.5042 9.11667 13 11 13Z")
        setWidth('40')
        setHeight('35')
        setViewBox('0 0 22 15')
    
    }else{
        setBalance('R$ 5000,00') 
        setPath("m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z")
        setWidth('40')
        setHeight('40')
        setViewBox('0 -960 960 960')
    }
    }

    return(
        <ScrollView style={styles.container}>
        <StatusBar barStyle={"dark-content"}/>
            <Header/>
            <View style={styles.balanceContainer}>
                <View>
                <Text style={styles.title}>Saldo disponivel</Text>
                </View>
                <View style={styles.balance}>
                    <Pressable  onPress={showBalance}>
                    <Svg width={width} height={height} viewBox={viewBox} fill="none" ref={refSvg}  >
                    <Path 
                    d={`${path}`}fill="white"/>
                    </Svg>
                    </Pressable>
                    <Text style={styles.value} ref={refText}>
                        {balance}
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.title}>Despesas</Text>
                <Text style={styles.title}>Mensais</Text>
                <Text style={styles.expanse}> - R$ 500,00 </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Entradas</Text>
                <Text style={styles.title}>Mensais</Text>
                <Text style={styles.gains}>  R$ 500,00 </Text>
            </View>
            </View>
            <View style={styles.month}>
            <Text style={styles.titleAlt}>Extrato Mensal</Text>
            <View style={styles.row}>
                <Text style={styles.expanses}>-R$ 50,00</Text>
                <Text style={styles.expanses}>Conta de água</Text>
                <Text style={styles.expanses}>02/03</Text>
                <Text style={styles.expanses}>16:44</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.gain}>R$ 50,00</Text>
                <Text style={styles.gain}>Freelance</Text>
                <Text style={styles.gain}>03/03</Text>
                <Text style={styles.gain}>16:44</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.expanses} >-R$ 150,00</Text>
                <Text style={styles.expanses}>Conta de Luz</Text>
                <Text style={styles.expanses}>10/03</Text>
                <Text style={styles.expanses}>16:44</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.gain} >R$ 2500,00</Text>
                <Text style={styles.gain}>Salario</Text>
                <Text style={styles.gain}>17/03</Text>
                <Text style={styles.gain}>16:44</Text>
            </View>
            </View>

            {isVerified === 'Foi verificado'?
            <View>
                <Text>Foi verificado</Text>
            </View>
            :
            <View>
                <Text>Não foi verificado</Text>
            </View>
            }
           <View style={styles.buttons}>
           <Pressable 
           style={styles.button}
           onPress={newExpanse}
           >
            <Text style={styles.textButton}>NOVA DESPESA</Text>
           </Pressable>
           <Pressable style={styles.button}
           onPress={newEnter}
           >
            <Text style={styles.textButton}>NOVA ENTRADA</Text>
           </Pressable>
           <Pressable style={styles.button}
           onPress={newCard}
           >
            <Text style={styles.textButton}>NOVO CARTÃO</Text>
           </Pressable>
           </View>

         
        
  
            
        </ScrollView>
    )
}

