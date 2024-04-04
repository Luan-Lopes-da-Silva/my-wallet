import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingTop:60,
        flex:1,
        backgroundColor:theme.colors.bg,
        position: 'relative'
    },
    balanceContainer:{
    padding:20,
    backgroundColor:theme.colors.inputBorder,
    width:400,
    alignSelf:'center',
    borderRadius:12,
    marginTop:60,
    },
    balance:{
    flexDirection:'row',
    
    marginTop:80,
    marginBottom:20
    },
    title:{
        fontSize:theme.fonts.size.heading.md,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.labels,
    },
    titleAlt:{
        fontSize:theme.fonts.size.heading.md,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.labels,
        marginLeft:20
    },
    value:{
        fontSize:theme.fonts.size.heading.lg,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.white,
        flex:1,
        textAlign: 'right'
    },
    cards:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'center',
    gap:8,
    },
    card:{
    backgroundColor:theme.colors.inputBorder,
    padding:12,
    paddingTop:24,
    paddingBottom:24,
    borderRadius:12
    },
    expanse:{
        fontSize:theme.fonts.size.body.lg,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.expanse,
        marginTop:12,
    },
    month:{
       alignSelf:'center',
       backgroundColor:theme.colors.inputBorder,
       paddingTop:24,
       paddingBottom:24,
       borderRadius:12,
       marginTop:30, 
    },
    gains:{
        fontSize:theme.fonts.size.body.lg,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.gains,
        marginTop:12,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:20,
        paddingHorizontal:20,
    },
    gain:{
        fontSize:theme.fonts.size.body.sm,
        fontFamily:theme.fonts.merriweather.regular,
        color:theme.colors.gains,
        marginTop:4,
    },
    expanses:{
        fontSize:theme.fonts.size.body.sm,
        fontFamily:theme.fonts.merriweather.regular,
        color:theme.colors.expanse,
        marginTop:4,
    },
    button:{
        width:150,
        backgroundColor:theme.colors.button,
        borderColor: theme.colors.white,
        paddingVertical:12,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2,
        borderRadius: theme.borderRadius.sm
    },
    textButton:{
        fontFamily: theme.fonts.montserrat.medium,
        color: theme.colors.white,
        textAlign:'center',
    },
    buttons:{
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:30,
        gap:8,
        marginBottom:90
    },
    containerSheet:{
        flex:1,
        marginBottom:30,
        padding:24,
        height:350
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
    titleSheet:{
        fontSize:theme.fonts.size.heading.lg,
        marginBottom:12,
        fontFamily:theme.fonts.montserrat.bold,
        color:theme.colors.white
    },
    buttonSheet:{
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
    textButtonSheet:{
        textAlign:'center',
        fontFamily:theme.fonts.montserrat.medium,
        color:theme.colors.white
    },
    verifyContainer:{
        padding: 10,
        alignSelf:'center',
        backgroundColor: '#ffb703',
        width:420
    },
    scrollViewContent:{
        flexGrow:1,
        justifyContent: 'space-between',
    },
    warning:{
        marginBottom:12,
        color: theme.colors.white,
        fontFamily: theme.fonts.montserrat.regular
    }

})