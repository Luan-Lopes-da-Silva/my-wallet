import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container:{
    backgroundColor:theme.colors.bg,
    flex: 1
 },   
 title:{
    color: theme.colors.white,
    fontFamily: theme.fonts.msMadi.regular,
    fontSize : theme.fonts.size.heading.lg,
    marginTop: 12,
    textAlign:'center',
    marginBottom: 12,
    width:300
 },
 label:{
    color: theme.colors.labels,
    fontFamily: theme.fonts.montserrat.regular,
    fontSize: theme.fonts.size.body.md  
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
    alignSelf:'center',
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
backArrow:{
   marginTop:12,
},
subtitle:{
   fontSize:theme.fonts.size.heading.md,
   color:theme.colors.white,
   marginBottom:20
},
errorMessage:{
   fontFamily:theme.fonts.merriweather.regular,
   color: '#d90429',
   fontSize:10,
   marginTop:3,
   marginBottom:3
}
})