import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Headercontainer:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        gap:12,
    },
    profile:{
        width:20,
        height:20,
        objectFit:'cover'
    },
    toggle:{
        width:12,
        height:12,
        objectFit:'cover'
    },
    title:{
        color:theme.colors.white,
        fontSize:theme.fonts.size.heading.lg,
        fontFamily:theme.fonts.msMadi.regular,
    }
})