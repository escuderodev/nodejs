import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import symbolOff from "./assets/pictures/symbol-off.png";
import symbolOn from "./assets/pictures/symbol-on.png";
import { useState } from 'react';

export default function App() {
  const [ActivatedStatus, setActivatedStatus] = useState(true);

  function handleSymbol() {
    setActivatedStatus(!ActivatedStatus)
  }

  return (
    <View style={ActivatedStatus ? styles.containerOn : styles.containerOff}>
      <Text style={ActivatedStatus ? styles.textOn : styles.textOff}>Clique para ativar ou desativar!</Text>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={ActivatedStatus ? symbolOn : symbolOff}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOn: {
    color: 'white',
    fontSize: 22,
    marginBottom: 5,
  },
  textOff: {
    color: 'black',
    fontSize: 22,
    marginBottom: 5,
  }
});
