import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:30,
        padding:24
    },
    input:{
        backgroundColor:theme.colors.inputs,
        padding:6,
        width:300,
        borderRadius:theme.borderRadius.sm,
        color:theme.colors.black,
        marginBottom:12
    },

    label:{
        color:theme.colors.labels,
        marginBottom:4,
        fontFamily:theme.fonts.montserrat.regular
    },

    form:{
        padding:12,
        paddingBottom:30
    },
    title:{
        fontSize:theme.fonts.size.heading.lg,
        marginBottom:12,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.white
    },
    button:{
        marginTop:20,
        backgroundColor:theme.colors.button,
        width:200,
        padding:12,
        borderRadius:theme.borderRadius.sm,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderColor:theme.colors.focustInputBorderAndButtonBorder
    },
    textButton:{
        textAlign:'center',
        fontFamily:theme.fonts.montserrat.medium,
        color:theme.colors.white
    }
})