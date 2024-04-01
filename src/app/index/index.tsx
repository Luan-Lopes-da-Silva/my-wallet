import { View } from "react-native";
import Login from "../login"
import { styles } from "./styles";
import { useState ,useEffect} from "react";
import { User, getAuth } from "firebase/auth";
import Home from "../home";


export default function App(){
   
    const [user,setUser] = useState<User | null>(null)
    useEffect(()=>{
        const subscriber = getAuth().onAuthStateChanged(setUser)
        return subscriber
    },[])

    return(
        <View style={styles.container}>
            {user? <Home/>: <Login/>}
        </View>
    )
}