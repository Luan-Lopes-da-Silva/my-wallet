import { Pressable, Text, TextInput, View ,Alert} from "react-native";
import { styles } from "./style";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function ForgetPassword(){
    function previousPage(){
        router.back()
    }
    function changePassword(){
        Alert.alert('Sucess' , 'Senha alterada com sucesso')
    }

    return(
        <View>
            <MaterialIcons
            name="arrow-back"
            size={32}
            onPress={previousPage}
            style={styles.icon}
            />
            <Text style={styles.title}>MyWallet</Text>
            <Text style={styles.subtitle}>Recuperar senha</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
            placeholder="email@email.com"
            keyboardType="default"
            style={styles.input}
            />
            <Text style={styles.label}>Nova senha</Text>
            <TextInput
            placeholder="********"
            keyboardType="numeric"
            style={styles.input}
            />

            <Pressable style={styles.button} onPress={changePassword}>
                <Text style={styles.textButton}>TROCAR SENHA</Text>
            </Pressable>

        </View>
    )
}