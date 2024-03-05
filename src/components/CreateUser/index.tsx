import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function CreateUser(){
    function handleBackPage(){
        router.back()
    }

    function handleRegister(){
        Alert.alert('Sucess','Usuario criado com sucesso')
    }

    return(
        <View style={styles.container}>
            <MaterialIcons
            size={32}
            name="arrow-back"
            style={styles.backArrow}
            onPress={handleBackPage}
            />
            <Text style={styles.title}>MyWallet</Text>
            <View>
                <Text style={styles.subtitle}>Registro de usuario</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                placeholder="Seu Nome"
                keyboardType="default"
                style={styles.input}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                placeholder="Seu email"
                keyboardType="email-address"
                style={styles.input}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                placeholder="****"
                keyboardType="visible-password"
                style={styles.input}
                />
                <Text 
                style={styles.label}
                >Confirmar senha</Text>
                <TextInput
                placeholder="****"
                keyboardType="visible-password"
                style={styles.input}
                />
                <Pressable 
                style={styles.button}
                onPress={handleRegister}
                >
                    <Text 
                    style={styles.textButton}
                    >REGISTRAR</Text>
                </Pressable>
            </View>
        </View>
    )
}