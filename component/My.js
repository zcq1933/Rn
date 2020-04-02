import React from 'react';
import { View,Text,Button,Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class My extends React.Component {
  constructor() {
    super();

    this.state = {
      data:1,
      width: new Animated.Value(100)
    }
  }
  zoom = ()=> {
    Animated.timing(this.state.width,{
      toValue:200,

    }).start()
  }
  render() {
    return (
      <View>
        <Button
          title="返回主页"
          onPress={()=>{Actions.Index('123')}}
        />
      <Button title="变大" onPress={()=> {this.zoom()}}></Button>
    <Animated.View style={{
        width:this.state.width,
        height:100,
        backgroundColor:'red'
      }}></Animated.View>
  </View>
    )

  }


}
