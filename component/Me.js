import React from 'react';
import { AsyncStorage,TouchableHighlight,ScrollView,Dimensions,Image,View,Text,StyleSheet,ImageBackground, TouchableHighlightBase } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

var { height,width } = Dimensions.get('window');

export default class extends React.Component {
  constructor() {
    super();
    this.state={
      imgUrl:'',
      islogin:false,
      username:null,
    }
  }
  changeHead = ()=> {
    ImagePicker.openCamera({
      width:300,
      height:300,
      cropping:true,
    }).then(image=> {
      this.setState({imgUrl:image.path})
    })
  }
  // componentWillMount() {
  //   console.log('get user')
  //     console.log(this.state.username+'username')
  //       let user = AsyncStorage.getItem('user').then(res=> {
  //         if(res) {
  //           this.setState({
  //             username:res
  //           })
  //         }
  //         else {
  //           this.setState({
  //             username:null
  //           })
  //         }
  //       })

  // }
  componentDidMount() {
    let user = AsyncStorage.getItem('user').then(res=> {
      console.log(res);
      if(res) {
        console.log('rest' + res)
        this.setState({
          username:res
        })
        console.log(this.state.username+'123asdfds4')
      }

    })
  



    


  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={{height:0.35*height}}>
            <ImageBackground style={{flex:1,height:height*0.35,resizeMode:'cover'}} source={require('../imgs/head.jpg')}>
            <View style={{height:height*0.35}}>
  
              <View style={{
                  width:width,
                  left:0,top:0.1*width,
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <TouchableHighlight onPress={()=>{this.changeHead()}}>
                    <View style={{borderRadius:width*0.1,width:width*0.2,height:width*0.2,
                        backgroundColor:'white',
                      }}>
                      <Image source={this.state.imgUrl?{uri:this.state.imgUrl}:require('../imgs/show.jpg')} style={{width:width*0.2,height:width*0.2,resizeMode:'cover',borderRadius:width*0.2}}></Image>
                    </View>
                  
                </TouchableHighlight>
                    <Text style={{fontSize:15,marginTop:10}}>BINNU DHILLON</Text>
              </View>
            </View>
  
          </ImageBackground>
  
          </View>
            <View style={[styles.box1]}>
              <View style={{height:45,flexDirection:"row",alignItems:'center',borderColor:'#eeeeee',borderBottomWidth:1}}>
                <Image source={require('../imgs/boy.png')} style={{width:30,
                    height:30,
                    marginLeft:20,
                    resizeMode:'cover'}}>
                  </Image>
                  <Text style={{marginTop:5,marginLeft:10,fontSize:15,color:'#4f4e4e'}}>我的个人中心</Text>
  
              </View>
              <View style={styles.iconBox}>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/setting.png')}></Image>
                <Text style={styles.innerFont}>账户管理</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/site.png')}></Image>
                <Text style={styles.innerFont}>收货地址</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/detail.png')}></Image>
                <Text style={styles.innerFont}>我的信息</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/order.png')}></Image>
                <Text style={styles.innerFont}>我的订单</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/qr.png')}></Image>
                  <Text style={styles.innerFont}>二维码</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/intergrel.png')}></Image>
                  <Text style={styles.innerFont}>我的积分</Text>
                </View>
  
                <View style={styles.innerBox}>
                  <Image style={{width:0.1*width,resizeMode:'contain'}} source={require('../imgs/collect.png')}></Image>
                <Text style={styles.innerFont}>我的收藏</Text>
                </View>
              </View>
            </View>
            <View style={[styles.box1,{height:height*0.4,marginTop:10}]}>
              <View style={{height:45,flexDirection:"row",alignItems:'center',borderColor:'#eeeeee',borderBottomWidth:1}}>
                <Image source={require('../imgs/box1.png')} style={{width:30,
                    height:20,
                    marginLeft:20,
                    resizeMode:'contain'}}>
                  </Image>
                  <Text style={{marginTop:5,marginLeft:10,fontSize:15,color:'#4f4e4e'}}>我的收藏</Text>
  
              </View>
              <View style={styles.iconBox}>
                <View style={styles.innerBox}>
                  <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/banzi.png')}></Image>
                <Text style={styles.innerFont}>居家维修保养</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/car.png')}></Image>
                <Text style={styles.innerFont}>出行接送</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/people.png')}></Image>
                <Text style={styles.innerFont}>我的受理人</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/bed.png')}></Image>
                <Text style={styles.innerFont}>我的住宿优惠</Text>
                </View>
                <View style={styles.innerBox}>
                  <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/sport.png')}></Image>
                <Text style={styles.innerFont}>我的活动</Text>
                </View>
                <TouchableHighlight onPress={()=>{Actions.Released()}}>
                  <View style={styles.innerBox}>
                    <Image style={{width:0.08*width,resizeMode:'contain'}} source={require('../imgs/release.png')}></Image>
                  <Text style={styles.innerFont}>我的发布</Text>
                  </View>

                </TouchableHighlight>
  
              </View>
            </View>
            {
              this.state.username==null?
              <TouchableHighlight onPress={() => {Actions.Login()}}>
                <Text>还未登录，点击登录</Text>
              </TouchableHighlight>
              :
              <View style={[styles.box2]}>
                <TouchableHighlight onPress={()=> {AsyncStorage.removeItem('user'),Actions.Login()}}>
            <Text style={{fontSize:12,color:"#4f4e4e"}}>{this.state.username} | 退出</Text>
                </TouchableHighlight>
              </View>

            }
              <TouchableHighlight onPress={()=>{Actions.Login()}}><Text>Login</Text></TouchableHighlight>
        </View>
  
      </ScrollView>
  
  
    )

  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor:'white',
  },
  box1:{
    height:height*0.5,
    backgroundColor:'white',
    borderColor:'#eeeeee',
    borderBottomWidth:2,
  },
  innerBox: {
    width:0.33*width,
    height:0.25*width,
    backgroundColor:'white',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'

  },
  box2: {
    flexDirection:'row',
    justifyContent:'center',
    height:100,
    marginTop:10,
    backgroundColor:'white',
  },
  iconBox: {
    flexDirection:'row',
    justifyContent:'flex-start',
    flexWrap:'wrap'
  },
  innerFont:{
    color:'#4f4e4e',
    fontSize:12,
    marginTop:3,
  }
})

