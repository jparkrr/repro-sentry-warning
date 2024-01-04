import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

// This is the line that causes the error
const ExpoLibrary = Notifications

// The reason I want to do it is because I want to use the following line
// ExpoLibrary.requestPermissionsAsync()
// where ExpoLibrary can also be something like expo-contacts


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
