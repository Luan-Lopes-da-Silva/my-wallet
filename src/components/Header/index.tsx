import { Alert, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import SvgProfile from "../SvgArrow";
import SvgArrow from "../SvgProfile";
export default function Header(){
    function openProfile(){
        Alert.alert('ola','ola')
    }

    function toggleMenu(){
        Alert.alert('ola','ola')   
    }
    return(
        <View style={styles.container}>
           <Text style={styles.title}>MyWallet</Text>
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