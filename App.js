import { Pressable, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./store/reducers"
import GrandParent from './screens/GrandParent';

const Stack = createStackNavigator();
const store = createStore(reducers);


export default function App() {
  console.log("App rendered")
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <GrandParent />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
})