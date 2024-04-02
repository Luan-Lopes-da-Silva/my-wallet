import Header from "@/components/Header";
import { Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles'
import EqualForms from "@/components/EqualForms";

export default function Enter(){

    return(
        <EqualForms
        buttonTitle="ADICIONAR RECEITA"
        subTitle="Nova Receita"
        firstPlaceHolder="Titulo da receita"
        secondPlaceHolder="Valor da receita"
        />
    )
}