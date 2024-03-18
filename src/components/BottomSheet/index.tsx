import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo, useRef } from 'react';
import { View , Text, Pressable } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

interface Props  {
  ref: any
}

export function BottomSheetComponent(props:Props){
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(()=> ["50%","80%"],[])
  return(   
   <GestureHandlerRootView style={{flex:1}}>
    <View style={styles.container}>
    <BottomSheet
    ref={props.ref}
    index={1}
    snapPoints={snapPoints}
    enablePanDownToClose={true}
    backgroundStyle={{backgroundColor:"#8C1848"}}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Adicionar nova despesa</Text>
        <Text style={styles.label}>Nome da Receita</Text>
        <TextInput
        placeholder='Nome da Receita'
        style={styles.input}
        />

        <Text style={styles.label}>Valor da Receita</Text>
        <TextInput
        placeholder='Valor da Receita'
        style={styles.input}
        />

        <Pressable style={styles.button}>
          <Text style={styles.textButton}>REGISTRAR RECEITA</Text>
        </Pressable>
      </View>
    </BottomSheet>
    </View>

   </GestureHandlerRootView>
    
  )
}