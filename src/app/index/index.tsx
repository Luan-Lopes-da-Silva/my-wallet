import { View } from "react-native";
import Login from "../login"
import { styles } from "./styles";

export default function App(){
    return(
        <View style={styles.container}>
        <Login/>
        </View>
    )
}