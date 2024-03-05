import {View,Text,StatusBar} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { style } from './styles'

export default function Index(){
    function handleBack(){
    router.back()
    }

    return(
    <View style={style.container}>
    <StatusBar barStyle={'dark-content'}/>
        <View>
            <MaterialIcons
            name='arrow-back'
            onPress={handleBack}
            size={40}
            />
        </View>
    </View>
    )
    
}