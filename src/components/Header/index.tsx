import { Alert, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import SvgProfile from "../SvgArrow";
import SvgArrow from "../SvgProfile";
import { router } from "expo-router";
import { useRef } from "react";
import { getAuth } from "firebase/auth";
export default function Header(){
    const refHideMenu = useRef<View>(null)
    const refMenu = useRef<View>(null)
    
    function openProfile(){
        Alert.alert('ola','ola')
    }

    function goHome(){
        router.push('../')
    }

    function signOut(){
        getAuth().signOut()
        Alert.alert('Deslogado', 'Usuario deslogado')
        router.push('/login/')
    }

    let count = 0
    function toggleMenu(){
        count++
        if(count == 0 || count%2 == 1){
           if(refHideMenu.current && refMenu.current){
            refHideMenu.current.setNativeProps({
                style:{
                    display : 'none',
                }
            })

            refMenu.current.setNativeProps({
                style:{
                    backgroundColor : 'transparent'
                }
            })
           }
        }else{
            if(refHideMenu.current && refMenu.current){
                refHideMenu.current.setNativeProps({
                    style:{
                        display : 'flex'
                    }
                })

                refMenu.current.setNativeProps({
                    style:{
                        backgroundColor : '#8C1848'
                    }
                })
            }
        }
    }
    return(
        <View 
        style={styles.Headercontainer}
        >
            <Pressable
            onPress={goHome}
            >
            <Text style={styles.title}>MyWallet</Text>
            </Pressable>
           <View 
           style={styles.icons}
           ref={refMenu}
           >
           <Pressable onPress={openProfile}>
           <SvgProfile
           />
            </Pressable>
            <Pressable onPress={toggleMenu}>
            <SvgArrow/>
            </Pressable>
            <View 
            style={styles.hideMenu}
            ref={refHideMenu}
            >
                <Pressable><Text>Meu perfil</Text></Pressable>
                <Pressable onPress={signOut}><Text>Sair</Text></Pressable>
            </View>
           </View>
        </View>
    )
}