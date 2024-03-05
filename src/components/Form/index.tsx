import { Button, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

export default function Form(){
    function forgetPassword(){
        router.push('/teste/')
    }

    return(
        <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
            placeholder="email@email.com"
            keyboardType="default"
            style={styles.input}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
            placeholder="********"
            keyboardType="numeric"
            style={styles.input}
            />
            <View style={styles.others}>
                <Text style={styles.links} onPress={forgetPassword}>Esqueceu sua senha?</Text>
                <Text style={styles.links}>Criar Usuario</Text>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>LOGIN</Text>
            </Pressable>

        </View>
    )
}