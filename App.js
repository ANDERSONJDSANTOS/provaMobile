import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';

// You can import from local files
import Formulario from './components/Formulario'
import Lista from './components/Lista'

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [lista, onChangeLista] = React.useState([]);

  function onAdd(text, number, favorite) {
    onChangeLista([{text: text, number: number, favorite: favorite}, ...lista]);
    saveLista(lista);
  }

  async function loadLista() {
    try {
      const listaData = await AsyncStorage.getItem(STORAGE_KEY)

      if (listaData === null) return

      onChangeLista(JSON.parse(listaData));
    } catch (e) {
      console.error('Failed to load lista.')
    }
  }

  async function saveLista(lista) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista))
    } catch (e) {
      console.error('Failed to save lista.')
    }
  }

  React.useEffect(() => {
    loadLista()
  }, [])


  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Formulario onAdd={onAdd}/> 
        </Card>
        <Card style={styles.card}>
          <Text>Minha Lista</Text>
          <Lista itens={lista} />
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    margin:20,
  }
});
