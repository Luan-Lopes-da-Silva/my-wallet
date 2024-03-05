import {View,StatusBar} from 'react-native'

import { style } from './styles'
import ForgetPassword from '@/components/ForgetPassword'

export default function Index(){

    return(
    <View style={style.container}>
    <StatusBar barStyle={'dark-content'}/>
        <ForgetPassword/>
    </View>
    )
    
}