import React from 'react';
import { View,Br,
    Text,Dimensions,Image,
    ScrollView,StyleSheet,TouchableOpacity,
    TextInput,} from 'react-native';
import Ficon from 'react-native-vector-icons/FontAwesome';
const { width,height } = Dimensions.get('window');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      act : 0
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#F0F0F0'}}>
        <View style={[styles.whitebg,{height:height/10}]}>
          <View style={[styles.whitebg,{marginTop:10,paddingBotton:10,height:height/10*0.6,width:width,flexDirection:'row',justifyContent:'center'}]}>
            <TextInput style={[styles.input]} placeholder="请输入商品名称"></TextInput>
            <View style={{backgroundColor: '#F0F0F0',flexDirection: 'column',justifyContent: 'center'}}>
              <TouchableOpacity>
                <Ficon style={{marginRight:10}} name={'search'} size={30} color={'grey'}></Ficon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.whitebg,{flexDirection: 'row',justifyContent:'space-around',alignItems: 'center',height:width*0.1,borderStyle:'solid',borderColor:'#ccc',borderTopWidth: 1}]}>
          {
            ['综合','销量','新品','价格','信用'].map((name,key)=> (
              <TouchableOpacity onPress={() => {this.setState({act:key});console.log(this.state.act)}}>
                <Text style={{color: this.state.act==key?'red':'grey'}}>{name}</Text>
              </TouchableOpacity>
            ))

          }
        </View>

        <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'flex-start'}}>
          <View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
            <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
              <Image
                style={[styles.imgs]}
                source={require('./imgs/item2.jpg')}
                ></Image>
            </View>
            <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={styles.textsmall}>36</Text>
          </View>
          <View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
            <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
              <Image
                style={[styles.imgs]}
                source={require('./imgs/item.jpg')}
                ></Image>
            </View>
            <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={styles.textsmall}>36</Text>
          </View><View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
          <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
            <Image
              style={[styles.imgs]}
              source={require('./imgs/item2.jpg')}
              ></Image>
          </View>
          <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={styles.textsmall}>36</Text>
        </View>
        <View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
          <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
            <Image
              style={[styles.imgs]}
              source={require('./imgs/item.jpg')}
              ></Image>
          </View>
          <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={styles.textsmall}>36</Text>
        </View>
        <View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
          <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
            <Image
              style={[styles.imgs]}
              source={require('./imgs/item2.jpg')}
              ></Image>
          </View>
          <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={styles.textsmall}>36</Text>
        </View>
        <View style={[styles.item,{textAlign:'center',flexDirection: 'column',justifyContent: 'center'}]}>
          <View style={[{flexDirection: 'row',justifyContent: 'center'}]}>
            <Image
              style={[styles.imgs]}
              source={require('./imgs/item.jpg')}
              ></Image>
          </View>
          <Text style={styles.textbig}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={styles.textsmall}>36</Text>
        </View>
      </View>
    </ScrollView>
  )
}

  }

var styles = StyleSheet.create({
  whitebg:{
    backgroundColor: 'white',
  },
  input:{
    width:width*0.8,
    backgroundColor: '#F0F0F0',

  },
  imgs: {
    height:180,
    width:120,
    resizeMode:'contain',
  },
  item: {
    marginTop:10,
    height:255,
    width:width*0.4,
    backgroundColor: 'white',
    marginLeft:width*0.06,
  },
  textbig: {
    width:150,
    fontSize:12,
    marginLeft:10,
  },
  textsmall: {
    fontSize:14,
    color:'red',
    marginLeft:10,
    marginTop:5

  }
})
