import React from 'react';
import { View,
        Text,
        TextInput,
        StatusBar,
        StyleSheet,
        Dimensions,
        Image,
        } from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Serve = ()=> {
  return (
    <View>
      <View style={[styles.searchBox]}>
        <TextInput placeholder="请输入您要搜索的关键字" style={[styles.searchInput]}></TextInput>
      <FIcon style={{position:'absolute',left:w*0.05}} name='search' size={20} color="#fff"></FIcon>
        <FIcon name='shopping-cart' size={30} color="#fff"></FIcon>
      </View>
      <StatusBar barStyle={'light-content'} backgroundColor='red'></StatusBar>
    <View style={{height:h*0.25,width:w,borderColor:'red'}}>
        <Swiper style={styles.Scontainer} autoplay={3} height={h*0.3} loop={true} autoplayIimeout={3} paginationStyle={{bottom:2}}>
          <Image style={styles.swiperImg} source={require('../imgs/b1.jpg')}></Image>
          <Image style={styles.swiperImg} source={require('../imgs/b2.jpg')}></Image>
        </Swiper>
      </View>
      <View style={styles.list}>
        <Image style={{marginLeft:20,height:0.1*h,width:0.1*h,resizeMode:'contain'}} source={require('../imgs/l1.jpg')}></Image>
        <Text style={styles.listText}>居家维修保养</Text>
        <Text style={{position:'absolute',right:20,color:"#dadada"}}>></Text>
      </View>

      <View style={styles.list}>
        <Image style={{marginLeft:20,height:0.1*h,width:0.1*h,resizeMode:'contain'}} source={require('../imgs/l2.jpg')}></Image>
        <Text style={styles.listText}>住宿优惠</Text>
        <Text style={{position:'absolute',right:20,color:"#dadada"}}>></Text>
      </View>
      <View style={styles.list}>
        <Image style={{marginLeft:20,height:0.1*h,width:0.1*h,resizeMode:'contain'}} source={require('../imgs/l3.jpg')}></Image>
        <Text style={styles.listText}>出行接送</Text>
        <Text style={{position:'absolute',right:20,color:"#dadada"}}>></Text>
      </View>
      <View style={styles.list}>
        <Image style={{marginLeft:20,height:0.1*h,width:0.1*h,resizeMode:'contain'}} source={require('../imgs/l4.jpg')}></Image>
        <Text style={styles.listText}>E族活动</Text>
        <Text style={{position:'absolute',right:20,color:"#dadada"}}>></Text>
      </View>

      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:10}}>
        <View style={{width:w*0.4,height:h*0.06,backgroundColor:"red",borderRadius:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:"white"}}>发布需求</Text>
        </View>
        <Text style={{color:'#787878',fontSize:12,marginTop:10}}>©E族之家 版权所有</Text>
      </View>
    </View>

  )
}

var styles = StyleSheet.create({

    Scontainer: {
      height:0.3*h,

    },
    swiperImg:{
      height:0.3*h,
      width:w,
      resizeMode:'cover',
    },
    searchBox: {
      backgroundColor: 'red',
      flexDirection:'row',
      alignItems:'center',
      height:50,
      position:'relative',
    },
    searchInput: {
      backgroundColor:'#fbb8b8',
      margin:0,
      padding:0,
      width:0.8*w,
      height:35,
      fontSize:13,
      borderRadius:10,
      marginLeft:10,
      paddingLeft:w*0.1,
      marginRight:15,
    },
    list: {
      flexDirection:'row',
      alignItems:'center',
      marginTop:10,
      height:0.1*h,
      backgroundColor:'#fff',

    },
    listText: {
      marginLeft:0.08*w,
    }

})
export default Serve;
