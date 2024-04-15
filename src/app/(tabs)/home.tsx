'use client'

import { ScrollView, Pressable, StatusBar, Text, View,Alert } from "react-native";
import { styles } from "@/styles/home";
import Header from "@/components/Header";
import React, {  useEffect, useState} from "react";
import { router, useFocusEffect} from "expo-router";
import {getAuth,sendEmailVerification} from 'firebase/auth'
import { db } from "../firebaseConfig";
import {collection, getDocs,query,where} from "firebase/firestore"
import { FlatList } from "react-native";
import { theme } from "@/theme";
import { Button } from "react-native";
import { useNavigation } from 'expo-router';

export default function Main(){
    const navigation:any = useNavigation();
    const [isVerified,setIsVerified] = useState('')
    const [expanses, setExpanses] = useState<Expanse[]>([])
    const [gains, setGains] = useState<Gains[]>([])
    const [balances,setBalances] = useState<any[]>([])
    const [balance,setBalance] = useState('')
    const [monthExpansesUser,setMonthExpansesUser] = useState<any[]>([])
    const [monthExpanse,setMonthExpanse] = useState('')
    const [totalBalance,setTotalBalance] = useState('')
    const [goals,setGoals] = useState<Goal[]>([])

  
    type Expanse = {
        expanseName: string,
        expanseValue : string,
        paymentData: string,
        index: number,
        hourEnter: string,
    }

    type Goal = {
        goalTitle: string,
        goalValue: string,
        reached: string,
        goalOwner: string,
        id: string
    }

    type Gains = {
        gainName: string,
        gainValue : string,
        enterDate: string,
        index: number ,
        hourEnter: string   
    }
    
    


    function stringForIntNumber(string:string){
        const intNumber = string.replace(/,.*S/, '')

        return parseInt(intNumber,10)
    }
    
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


    async function update() {
        
    }

    useFocusEffect(
        React.useCallback(()=>{
        setExpanses([])
        async function getExpanseFromCurrentUser() {
            const auth = getAuth().currentUser?.uid
    
            const expanseFilter = query(collection(db, "expanses"), where("ownerExpanse", "==" , auth))
    
            const querySnapshot = await getDocs(expanseFilter)
            
            querySnapshot.forEach((doc)=>{
                const currentExpanse = doc.data()
            
                const newItem:Expanse= {
                    expanseName:currentExpanse.expanseName,
                    expanseValue: currentExpanse.expanseValue,
                    paymentData: currentExpanse.paymentData,
                    index: Math.random() * 1000,
                    hourEnter: currentExpanse.hourEnter
                }            
                setExpanses(prevExpanses=> [...prevExpanses,newItem])
            })
            }
    
            getExpanseFromCurrentUser()
        },[])
    )

    useFocusEffect(
        React.useCallback(()=>{
            setGoals([])

            async function getGoalsFromUser(){

            const auth = getAuth().currentUser?.uid
    
            const goalFilter = query(collection(db, "goals"), where("goalOwner", "==" , auth))
    
            const querySnapshot = await getDocs(goalFilter)

            querySnapshot.forEach((doc)=>{
              
                const currentGoal = doc.data()
            
                const newItem:Goal= {
                  goalTitle: currentGoal.goalTitle,
                  goalValue:currentGoal.goalValue,
                  reached: currentGoal.reached,
                  goalOwner: currentGoal.goalOwner,
                  id: currentGoal.id
                }            
                setGoals(prevGoals=> [...prevGoals,newItem])
            })
            }
            getGoalsFromUser()
        },[])
    )

    useFocusEffect(
        React.useCallback(()=>{
            async function monthExpanses() {
                const auth = getAuth().currentUser?.uid
                
                const expansesFilter = query(collection(db, "expanses"), where("ownerExpanse", "==" , auth))
        
                const querySnapshot = await getDocs(expansesFilter)
                
                const expansesArray:any[] = []
        
                querySnapshot.forEach((doc)=>{
                    const currentExpanses = doc.data()
                    const converseExpanse = stringForIntNumber(currentExpanses.expanseValue)
                    expansesArray.push(converseExpanse)
                })
                setMonthExpansesUser(expansesArray)
                }
                monthExpanses()
        },[])
    )

    useEffect(()=>{
        const sumExpanses = monthExpansesUser.reduce((acc,cur)=>{
            return acc+cur
        },0)
        setMonthExpanse(sumExpanses)
    }, [monthExpansesUser])

    useFocusEffect(
        React.useCallback(()=>{
            async function balanceCurrentUser() {
                const auth = getAuth().currentUser?.uid
                
                const gainsFilter = query(collection(db, "gains"), where("ownerGains", "==" , auth))
        
                const querySnapshot = await getDocs(gainsFilter)
                
                const balancesArray:any[] = []
        
                querySnapshot.forEach((doc)=>{
                    const currentGains = doc.data()
                    const converseBalance = stringForIntNumber(currentGains.gainValue)
                    balancesArray.push(converseBalance)
                })
                setBalances(balancesArray)
                }
        
                balanceCurrentUser()
        },[])
    )


    useEffect(()=>{
        const sumBalances = balances.reduce((acc,cur)=>{
            return acc+cur
        },0)
        const totalSum = Number(sumBalances) - Number(monthExpanse)
        setTotalBalance(`${totalSum}`)
        setBalance(sumBalances)
    },[balances])
  

    useFocusEffect(
        React.useCallback(()=>{
            setGains([])
            async function getGainsFromCurrentUser() {
                const auth = getAuth().currentUser?.uid
        
                const gainsFilter = query(collection(db, "gains"), where("ownerGains", "==" , auth))
        
                const querySnapshot = await getDocs(gainsFilter)
        
                
                querySnapshot.forEach((doc)=>{
                    const currentGains = doc.data()
                
                    const newItem:Gains= {
                        gainName:currentGains.gainName,
                        gainValue: currentGains.gainValue,
                        enterDate: currentGains.enterDate,
                        index: Math.random() * 1000,
                        hourEnter: currentGains.hourEnter
                    }            
                    setGains(prevGains=>[...prevGains,newItem])
                })
                }   
                getGainsFromCurrentUser()
        },[])
    )

    function sendVerifyEmail(){
    const currentUser = getAuth().currentUser
    if(currentUser){
        sendEmailVerification(currentUser)
        Alert.alert('Email enviado','Email de verificação enviado cheque também sua caixa de spams.')
    }
    }


    return(
       <View style={styles.container}>
        <ScrollView >
        <StatusBar barStyle={"dark-content"}/>
            <Header/>
            <View style={styles.balanceContainer}>
                <View>
                <Text style={styles.title}>Saldo disponivel</Text>
                </View>
                <View style={styles.balance}>
                    <Text style={styles.value}>
                    R$ {totalBalance},00
                    </Text>
                </View>
            </View>
            <View style={styles.cards}>
            <View style={styles.card}>
                <Text style={styles.title}>Despesas</Text>
                <Text style={styles.title}>Mensais</Text>
                <Text style={styles.expanse}>- R$ {monthExpanse},00</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Entradas</Text>
                <Text style={styles.title}>Mensais</Text>
                <Text style={styles.gains}>R$ {balance},00</Text>
            </View>
            </View>
            
            {expanses.length<1 && gains.length<1?(
            <View></View>
            ):(
                <View style={styles.month}>
                <Text style={styles.titleAlt}>Extrato Mensal</Text>
                {expanses.map((item,index)=>(
                <View style={styles.row} key={index}>
                    <Text style={styles.expanses}>- R${item.expanseValue}</Text>
                    <Text style={styles.expanses}>{item.expanseName}</Text>
                    <Text style={styles.expanses}>{item.paymentData}</Text>
                </View>
                
                ))}  
    
                {gains.map((item,index)=>(
                <View style={styles.row} key={index}>
                    <Text style={styles.gain}>+ R${item.gainValue}</Text>
                    <Text style={styles.gain}>{item.gainName}</Text>
                    <Text style={styles.gain}>{item.enterDate}</Text>
                </View>
                
                ))}   
                </View>
            )}

            <FlatList
            data={goals}
            horizontal={true}
            renderItem={({item})=> 
                <View style={styles.goals}>
                    <View key={item.id} style={styles.goal}>
                    <Text style={styles.goalsTitle}>{item.goalTitle}</Text>
                    <View style={styles.progressBar}>
                        <View style={{position:'absolute',
                        height:30,
                        borderRadius: theme.borderRadius.lg,
                        width: `${item.reached}%`,
                        backgroundColor: theme.colors.inputs
                        }}>
                        </View>
                    </View>
                    <Text style={styles.goalValue}>R$ {item.goalValue},00</Text>
                    <Button
                    title="VER"
                    onPress={() => navigation.navigate('DetailsScreen',{id:item.id})}
                    />
                    </View>
                </View>
            }
            />
            
           
         
        </ScrollView>

        {isVerified == 'Foi verificado'?
        <></>
        :
        <View style={styles.verifyContainer}>
            <Text style={styles.warning}>Seu email não foi verificado clique no botão para verificar.</Text>
            <Pressable style={styles.button} onPress={sendVerifyEmail}>
                <Text style={styles.textButton}>VERIFICAR</Text>
            </Pressable>
        </View>
        }
       </View>
    )
}
