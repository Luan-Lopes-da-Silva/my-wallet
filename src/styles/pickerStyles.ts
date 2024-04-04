import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width:300,
        fontSize: 16,
        padding:6,
        marginBottom:20,
        marginTop:4,
        backgroundColor:theme.colors.inputs,
        borderRadius: theme.borderRadius.sm,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: theme.colors.inputBorder,
    },
    inputAndroid: {
        width:300,
        fontSize: 16,
        padding:6,
        marginBottom:20,
        marginTop:4,
        backgroundColor:theme.colors.inputs,
        borderRadius: theme.borderRadius.sm,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: theme.colors.inputBorder,
    }
});