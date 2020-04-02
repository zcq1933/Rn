import React from 'react';
import { View,ActivityIndicator,Text } from 'react-native';

export default class Mylist extends React.Component {
  constructor () {
    super();
    this.state = {
      data:[1,2,35,6],
      isLoad: false
    }
  }

componentDidMount() {
  setTimeout(()=> {
    this.setState({isLoad:true})
  },1000)
}

  render() {

    return (
      <View>
        {
          this.state.isLoad?(
            this.state.data.map((item)=>(
              <Text>{item}</Text>
            ))
          )
          :
          (<ActivityIndicator size="large" color="red"/>)

        }
      </View>
    )

    // if(this.state.isLoad) {
    //   return (
    //     <View>
    //       {
    //         this.state.data.map((item)=>(
    //           <Text>{item}</Text>
    //         ))
    //       }
    //     </View>
    //   )
    // }
    // else {
    //   return(
    //     <View style={{flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
    //       <ActivityIndicator size="large" color="red"/>
    //     </View>
    //
    //   )
    // }

  }

};
