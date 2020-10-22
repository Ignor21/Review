import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class PokemonHome extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Pokemon Screen</Text>
      </View>
    );
  }
}