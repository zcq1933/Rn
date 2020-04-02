import React,{Component} from 'react'
import { Button,View,Text,AsyncStorage } from 'react-native'

export default class Local extends Component {
    storeData = (x)=> {
      AsyncStorage.setItem('userName',x)
    }
    getData = ()=>{
      AsyncStorage.getItem('userName')
      .then((res)=>console.log(res));
    }
    getTitle = ()=> {
      fetch('https://cnodejs.org/api/v1/topics')
        .then((res)=> {res = res.json();return(res)}).then((res) => console.log(res))
    }

    render() {
      return (
        <View>
            <Button title="存储" onPress={this.storeData(this.title)}></Button>
            <Button title="获取" onPress={this.getData}></Button>
            <Button title="fetch" onPress={this.getTitle}></Button>

        </View>
      )
    }
}
