import React,{ Component } from 'react';
import { View ,Text,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Msg extends Component {
  render() {
    return(
      <View>
        <Button title='跳转到Doc' onPress={()=>Actions.></Button>
        <Text>Msg</Text>
      </View>
    )
  }
}
