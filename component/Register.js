import React,{ Component } from 'react';
import { View,ToastAndroid,BackHandler,TextInput,Text,TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const loginApi = 'https://www.fastmock.site/mock/cb7c0b39f278ac4afd7ae544f3abecb7/user/register';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress',this.onBackButtonPressAndroid);
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
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
    }
    userhandle = (text)=> {
        this.setState({username:text});
    };
    pwdhandle = (test)=> {
        this.setState({pwd:text})
    }

    login = ()=> {

        console.log(this.state.username)
        fetch(loginApi,{
            method:'POST',
            username:this.state.username,
            pwd:this.state.pwd,
        }).then(res=>res.json()).then(res=> {
            if(res.desc=="成功"){
                console.log('成功')
                .then(()=> {
                    Actions.Login();
                    
                })
                

            }
        })
    }
    


    render() {
        return (
        <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=> Actions.Login()}>
                <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>Actions.Login()}>
                <Text>去登陆帐号</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text>正在注册。。。</Text></View>
            :null
        }
        </View>
        )
    }
}