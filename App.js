import React,{ Component } from 'react';
import { View,Text,AsyncStorage,ToastAndroid,BackHandler } from 'react-native';
import { Lightbox,Modal,Overlay,Drawer,Actions,Router,Scene,Tabs } from 'react-native-router-flux';
import FIcon from 'react-native-vector-icons/FontAwesome';
import My from './component/My';
import SearchItem from './App2';
import MyBox from './component/MyBox';
import Serve from './component/Serve';
import Me from './component/Me.js';
import SplashScreen from 'react-native-splash-screen';
import Released from './component/Released';
import Swiper from './component/Swiper';
import Login from './component/Login';
import Register from './component/Register';
export default class App extends Component{
  constructor() {
    super();
    this.state= {
      isLogin:false,
      isInstall:true,
    }
  }
  componentWillMount() {
    let isInstall = AsyncStorage.getItem('isInstall').then(res=>{
      if(res) {
        this.setState({
          isInstall:false
        })
      }
    })

    let loginUser = AsyncStorage.getItem('user').then(res=> {
      if(res) {
        this.setState({
          isLogin:true,
        })
      }
    })
  }

  afterInstall = ()=> {
    this.setState({
      isInstall:false
    })
  }

  setLogin = ()=> {
    this.setState({
      isLogin:true
    })
  }
  
  init = ()=> {
    AsyncStorage.getItem('isInstall').then(res=>{
      if(res) {
        setInstall(false);
      }
    })
  }
  onBackButtonPressAndroid = () => {
    if (this.props.navigation.isFocused()) {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
}
  componentDidMount() {
    console.log(this.state.isInstall + 'install')
    setInterval(function(){
      SplashScreen.hide();
    },1000)
    BackHandler.addEventListener('hardwareBackPress',
    this.onBackButtonPressAndroid);
    console.log(this.state.isLogin)

  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress',
        this.onBackButtonPressAndroid);
}


// (this.state.isLogin?
  render() {
    return (
      this.state.isInstall==false?<Swiper afterInstall={this.afterInstall}></Swiper>:
      <Router>
        <Overlay>
        <Modal key='modal' hideNavBar>
            <Lightbox key='lightbox'>
                {/* <Drawer
                  key="drawer"
                  drawerPosition="leftt"
                  // drawerImage={图片源}
                  drawerIcon={()=><FIcon name='search'/>}
                  contentComponent={()=><Text>Drawer</Text>}
                  // drawerWidth={400}
                  // hideDrawerButton
                > */}
                <Scene key='root'>
                    <Tabs
                      key='tabbar'
                      hideNavBar
                      activeTintColor='red'
                      inactiveTintColor='#ccc'
                      tabBarStyle={{backgroundColor:'white'}}
                    >
                        {/* 首页栏 */}
                        <Scene key='Serve'
                          hideNavBar
                          // title='消息'
                          title='首页'
                          icon={
                            ({focused})=>
                            <FIcon name="home" size={25} color={focused?'red':'#ccc'}/>
                          }
                          component={Serve}
                        >
                        </Scene>
                        <Scene
                        hideNavBar
                        key='searchItem'
                        component={SearchItem}
                        title="分类"
                        icon={({focused}) => <FIcon name='dropbox' color={focused?'red':'#ccc'} size={20}></FIcon>}
                        />
                        <Scene
                        hideNavBar
                        key="SearchItem"
                        component={SearchItem}
                        title="购物车"
                        icon={({focused})=><FIcon name='dropbox' color={focused?'red':'#ccc'} size={20}/>}
                        />
                        <Scene
                        hideNavBar
                        key="Me"
                        component={Me}
                        title="我的"
                        icon={({focused})=><FIcon name='user' color={focused?'red':'#ccc'} size={20}/>}
                        />
                    </Tabs>
                    <Scene
                      key='Released'
                      component={Released}
                      title='我的发布'
                      hideNavBar
                    />
                </Scene>
            {/* </Drawer> */}
            <Scene key='MyBox' component={MyBox} title="Box"></Scene>
            <Scene key='SearchItem' component={SearchItem}></Scene>
        </Lightbox>
            <Scene key='My' component={My}></Scene>
             <Scene key="Login" component={Login} title="登录" ></Scene>
             <Scene key="Register" component={Register} title="注册" ></Scene>
        </Modal>
      </Overlay>
      </Router>
      // :<Login setLogin={this.setLogin}></Login>
        // )


  )
  }
}
