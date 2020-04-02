import React from 'react';
import { ToastAndroid,TouchableHighlight,Text,View,StyleSheet,Image,TouchableOpacity, TouchableHighlightBase } from 'react-native';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';

export default class Released extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[],
            page:1,
        }
    }

    componentWillMount() {
        fetch('http://cnodejs.org/api/v1/topics?limit=15&&page=1')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
                console.log('didMount')
            })
    }
    componentWillUpdate(nextProps,nextState) {
        if(this.state.page == nextState.page) {
            
        }
        else {
            console.log(this.state.page);
            console.log(nextState.page)
            fetch('http://cnodejs.org/api/v1/topics?limit=15&&page='+nextState.page)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
                console.log('update')
            })

        }
    }

    render() {
        return(
           <View style={{backgroundColor:'white'}}>
               <View style={[styles.Navbar]}>
                    <TouchableHighlight>
                        <IIcon name="ios-arrow-back" size={20} color="white">
                        </IIcon>
                    </TouchableHighlight>
                    <Text style={{fontSize:20,color:'#fff'}}>我的发布</Text>
                    <TouchableHighlight>
                        <EIcon name="dots-three-horizontal" size={20} color="white">
                        </EIcon>
                    </TouchableHighlight>
                    
               </View>
                <View>
                    {
                        this.state.data.map((item,key)=>(
                            <View style={styles.subject}>
                                <Text style={{marginLeft:10}}>
                                    {item.title?
                                    (item.title.length>15?item.title.substr(0,12)+'...':item.title)
                                    :''}</Text>

                                <View style={styles.dateContainer}>

                                    <Text style={styles.sDate}>
                                        {
                                            item.create_at.substr(0,10)
                                        }
                                    </Text>
                                    <Text style={{marginRight:10,color:key%2==1?'red':'black'}}>{parseInt(Math.random()*3)%2==1?'已回复':'未回复'}</Text>


                                </View>
                            </View>
                        ))
                    }

                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={()=>{
                            if(this.state.page == 1) {
                                ToastAndroid.show("现在是第一页！", ToastAndroid.SHORT);
                            }
                            else {
                                this.setState({page:this.state.page-1})
                            }
                            }} style={styles.btn}><Text style={{color:'white'}}>上一页</Text></TouchableOpacity>
                        <Text>第{this.state.page}页</Text>
                        <TouchableOpacity onPress={()=>{this.setState({page:this.state.page+1})}} style={styles.btn}><Text style={{color:'white'}}>下一页</Text></TouchableOpacity>
                    </View>
                </View>
                <Text>

                </Text>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    dateContainer: {
        flexDirection:'row',

    },
    sDate: {  
        marginRight:10,
    },
    subject: {
        height:35,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    Navbar: {
        padding:0,
        margin:0,
        height:60,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center',
    },
    btn : {
        width:80,
        height:35,
        borderRadius:10,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },  
    btnContainer: {
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around',
    }


})