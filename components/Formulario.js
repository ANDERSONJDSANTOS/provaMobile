import { Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { Switch } from 'react-native-paper';
import Toggle from '../components/toggle';
import { useState } from "react";

import * as Progress from 'react-native-progress';

const Formulario = (props) => {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  console.log(progress)

  return (
    <SafeAreaView>
      <TextInput
        autoComplete="name" 
        placeholder= "nome"
        style= {styles.input}
        placeholderTextColor= "black"
        onChangeText={setName}
      />
      <TextInput
        autoComplete="number" 
        keyboardType="numeric"
        placeholder= "Porcentagem de tarefa realizada"
        style= { [styles.input, {margin:0, marginBottom:12, marginHorizontal:12}] }
        placeholderTextColor= "black"
        onChangeText={setProgress}
        value={progress}
      />
      <Progress.Bar 
        borderColor="#841584"
        progress={parseInt(progress)}
        style={ styles.progressBar } 
        width={200} 
      /> 
      <Text style={{marginHorizontal:12}}>Favorito ?</Text>     
      <Toggle
        isSwitchOn={isSwitchOn}
        setIsSwitchOn={setIsSwitchOn}
      />
      <Button
        onPress={() => props.onAdd(name, progress, isSwitchOn)}
        title="Adicionar"
        color="#841584"
        accessibilityLabel="Adicionar Item a Lista"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor:"#841584",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  progressBar: {
    margin:12,
    width:"98%"
  }
});

export default Formulario;