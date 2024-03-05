import {View,Text,StatusBar} from 'react-native'
import { style } from './styles'
import CreateUser from '@/components/CreateUser'

export default function Index(){
    return(
    <View style={style.container}>
    <StatusBar barStyle={'dark-content'}/>
    <CreateUser/>
    </View>
    )
    
}