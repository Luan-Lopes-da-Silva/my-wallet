import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 container:{
    backgroundColor:theme.colors.bg,
 },   
 title:{
    color: theme.colors.white,
    fontFamily: theme.fonts.msMadi.regular,
    fontSize : theme.fonts.size.heading.xl,
    marginTop: 42,
    textAlign:'center',
    marginBottom: 40,
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
}
})