import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; /**olmaz ise sayfa geçişleri sağlanamaz. */
import { createStackNavigator } from '@react-navigation/stack'/**sayfadan sayfaya geçiş yapmak için */
import Products from './src/pages/Products/Products';
import ProductsDeatils from './src/pages/Products/ProductsDeatils';
import Login from './src/pages/Login/Login';

const Stack = createStackNavigator()

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='LoginPge' component={Login}
          options={{
            title: "Oturum Aç",
            headerStyle: { backgroundColor: '#81d4fa' },
            headerTitleStyle: { color: 'white' },
          }}
        />

        <Stack.Screen name='ProductPage' component={Products}
          options={{
            title: "Alış-Veriş",
            headerStyle: { backgroundColor: '#81d4fa' },
            headerTitleStyle: { color: 'white' },
          }}
        />
        <Stack.Screen name='DetailPga' component={ProductsDeatils} 
        options={{
          title: "Ürün Detayı",
          headerStyle: { backgroundColor: '#81d4fa' },
          headerTitleStyle: { color: 'white' },
          headerTintColor:'white'
        }}
        />
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
