import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MainScreen extends Component {
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>Main Screen</Text>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokemon')}>
          <Text>Pokemon</Text>
        </TouchableOpacity>
      </View>
    );
  }
}