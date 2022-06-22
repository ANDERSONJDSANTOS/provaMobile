import { Text, SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import ProgressBar from './ProgressoBar';

import NumberInput from "./number-input";
import { useState } from "react";

import Toggle from './toggle';


const Formulario = (props) => {
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [percentage, setPercentage] = useState(0);

  console.log(isSwitchOn)

  return (
    <SafeAreaView>
      <TextInput
        autoComplete="name" 
        placeholder= "nome"
        style= {styles.input}
        placeholderTextColor= "black"
        onChangeText={setName}
      />
      <NumberInput
        percentage={ percentage }
        value={ progress }
        onChangeValue={ setProgress }
        setPercentage={ setPercentage }
      />
      <ProgressBar
        progress={progress}
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