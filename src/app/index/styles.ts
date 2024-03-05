import { StyleSheet } from "react-native";
import {theme} from '@/theme'

export const style = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.bg,
        flex:1,
        alignItems:'center',
    },
    text :{
        color: theme.colors.white,
        fontFamily: theme.fonts.msMadi.regular,
        fontSize : theme.fonts.size.heading.xl,
        marginTop: 42,
        textAlign:'center',
        marginBottom: 70,
        width:'100%'
    }
})