import { Alert, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import SvgProfile from "../SvgArrow";
import SvgArrow from "../SvgProfile";
import { router } from "expo-router";
export default function Header(){
    function openProfile(){
        Alert.alert('ola','ola')
    }

    function goHome(){
        router.back()
    }

    function toggleMenu(){
        Alert.alert('ola','ola')   
    }
    return(
        <View style={styles.container}>
            <Pressable
            onPress={goHome}
            >
            <Text style={styles.title}>MyWallet</Text>
            </Pressable>
           <View style={styles.icons}>
           <Pressable onPress={openProfile}>
           <SvgProfile
           />
            </Pressable>
            <Pressable onPress={toggleMenu}>
            <SvgArrow/>
            </Pressable>
           </View>
        </View>
    )
}