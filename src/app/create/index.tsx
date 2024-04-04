import {View,StatusBar} from 'react-native'
import { style } from './styles'
import CreateUser from '@/components/CreateUser'

export function Index(){
    return(
    <View style={style.container}>
    <StatusBar barStyle={'dark-content'}/>
    <CreateUser/>
    </View>
    )
    
}