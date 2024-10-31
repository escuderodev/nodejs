import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}
    onTouchStart={(event) => {
      alert('Toque iniciado!')
    }}
    onTouchEnd={(event) => {
      alert('Toque finalizado!')
    }}
    >
      <Text>Palmeiras não tem mundial!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
