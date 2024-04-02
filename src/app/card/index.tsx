import Header from "@/components/Header";
import { Text, TextInput, View ,Pressable} from "react-native";
import {styles} from './styles'
import RNPickerSelect from "react-native-picker-select";
import { pickerSelectStyles } from "./pickerStyles";
import {z} from 'zod'
import {zodResolver} from  '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'

export default function newCard(){
    const formSchema = z.object({
        name: z.string().min(1, 'O nome é obrigatório.'),
        balance: z.string().min(1,'O saldo é obrigatório.'),
        expires: z.string().min(1, 'Data de vencimento obrigatoria.'),
        flag: z.string().min(1, "A bandeira é obrigatória")
    })

    const {control,handleSubmit} = useForm({
        defaultValues:{
            name: '',
            balance: '',
            expires: '',
            flag: '',
        },
        resolver: zodResolver(formSchema)
    })

    type CardSchema = {
        name: string,
        balance: string,
        expires: string,
        flag: string
    }

    const onSubmit = (data:CardSchema)=>{
        console.log(data)
    }


    return(
        <View style={styles.container}>
            <Header/>
           <View style={styles.main}>
           <Text style={styles.subtitle}>Adicionar novo cartão</Text>
           <Text style={styles.label}>Nome do Cartão</Text>
           <Controller
                control={control}
                name={'name'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
                <>
                {error && <Text style={styles.errorMessage}>
                          {error.message}
                          </Text>
                }
                  <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType = 'default'
                  placeholder = 'Nome do cartão'
                  />
                </>
                )}
            />
            <Text style={styles.label}>Saldo do Cartão</Text>
            <Controller
                control={control}
                name={'balance'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
                <>
                {error && <Text style={styles.errorMessage}>
                          {error.message}
                          </Text>
                }
                  <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType = 'default'
                  placeholder = 'Saldo do cartão'
                  />
                </>
                )}
            />
           
            <Text style={styles.label}>Data de vencimento da fatura</Text>
            <Controller
                control={control}
                name={'expires'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
                <>
                {error && <Text style={styles.errorMessage}>
                          {error.message}
                          </Text>
                }
                  <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType = 'default'
                  placeholder = 'Data de vencimento do cartão'
                  />
                </>
                )}
            />
            <Text style={styles.label}>Selecionar bandeira do cartão</Text>
            <Controller
                control={control}
                name={'flag'}
                render={({ field: { onBlur ,value,onChange}, fieldState: { error }})=>(
                <>
                {error && <Text style={styles.errorMessage}>
                          {error.message}
                          </Text>
                }
                 <RNPickerSelect
                 onValueChange={onChange}
                 style={pickerSelectStyles}
                 items={[
                 {label: "Mastercard", value:"Mastercard"},
                 {label: "Visa", value:"Visa"},
                 {label: "Elo", value:"Elo"},
                 ]}
            />
                </>
                )}
            />
           

            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textButton}>REGISTRAR CARTÃO</Text>
            </Pressable>
           </View>
        </View>
    )
}

