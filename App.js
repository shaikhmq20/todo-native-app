import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Statusbar as sb } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  }
})