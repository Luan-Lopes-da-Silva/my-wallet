import {View,Text,StatusBar} from 'react-native'
import { style } from './styles'
import Form from '@/components/Form'

export function Login(){
    return(
    <View style={style.container}>
    <StatusBar barStyle={'dark-content'}/>
    <Text style={style.text}>MyWallet</Text>
    <Form/>
    </View>
    )
    
}