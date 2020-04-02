import React from 'react';
import { Animated,View,Text,Button,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MyBox extends React.Component {
  constructor() {
    super();
    this.state = {
      width:new Animated.Value(20),
      height:new Animated.Value(10),
      opacity:new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.width,{
      toValue:100,
    }).start();
    Animated.timing(this.state.height,{
      toValue:100,
    }).start();
    Animated.timing(this.state.opacity,{
      toValue:1
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.innerBox,{width:this.state.width,height:this.state.height, opacity:this.state.opacity,}]}>
          <Button title="返回" onPress={Actions.pop}></Button>
        </Animated.View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(50,50,50,.5)',
    position:'absolute',
    left:0,
    top:0,
    right:0,
    bottom:0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerBox : {
    width:'80%',
    height:'50%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  }


})
