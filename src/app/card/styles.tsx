import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        flex:1,
        backgroundColor:theme.colors.bg,
        paddingBottom:60
    },
    main:{
        paddingLeft:20,
        marginTop:30
    },
    subtitle:{
        fontSize:26,
        color:theme.colors.white,
        fontFamily:theme.fonts.montserrat.regular,
        marginBottom:20,
    },
    label:{
        color: theme.colors.labels,
        fontFamily: theme.fonts.montserrat.regular,
        fontSize: theme.fonts.size.body.md,
       
        },
        input:{
        backgroundColor:theme.colors.inputs,
        marginTop:4,
        width:300,
        padding:6,
        marginBottom:20,
        borderRadius: theme.borderRadius.sm,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: theme.colors.inputBorder
        },

        button:{
           width:250,
            backgroundColor:theme.colors.button,
            paddingHorizontal:44,
            paddingVertical:8,
            borderColor: theme.colors.white,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderTopWidth: 2,
            borderRadius: theme.borderRadius.sm
        },
        textButton:{
            fontFamily: theme.fonts.montserrat.medium,
            color: theme.colors.white
        },
        errorMessage:{
            fontFamily:theme.fonts.merriweather.regular,
            color: '#d90429',
            fontSize:10,
            marginTop:3,
            marginBottom:3
        }
})