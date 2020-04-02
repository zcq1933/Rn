import React from 'react';
import { View,Text,Button } from 'react-native';
import { Router,Drawer,Actions } from 'react-native-router-flux';
import My from './My';
import FIcon from 'react-native-vector-icons/FontAwesome';

export default class Index extends React.Component {
  render() {
    return (
      <View>
        <Button title="lightbox" onPress={()=> {Actions.MyBox()}}></Button>
        <Button title="Modal" onPress={()=> {Actions.My()}}></Button>
        <Button title="Mylist" onPress={()=>{Actions.Mylist()}}></Button>
      </View>
    )

  }


}
