import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; /**olmaz ise sayfa geçişleri sağlanamaz. */
import {createStackNavigator} from '@react-navigation/stack'/**sayfadan sayfaya geçiş yapmak için */
import Products from './src/pages/Products/Products';
import ProductsDeatils from './src/pages/Products/ProductsDeatils';



const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductPage' component={Products}/>
        <Stack.Screen name='DetailPga' component={ProductsDeatils}/>
      </Stack.Navigator>
    </NavigationContainer>
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
