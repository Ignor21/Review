import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';
import PokemonHome from './pokemon/PokemonHome';
const Stack = createStackNavigator();

function Main() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

function Pokemon() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokemonHome" component={PokemonHome} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
  
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
        <Stack.Screen name="Pokemon" component={Pokemon} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;