import React,{ Component } from 'react';
import { Text,View,StyleSheet,Image,AsyncStorage,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


export default class SwiperPage extends Component {
    start = ()=> {
        console.log('123');
        AsyncStorage.setItem('isInstall','true',()=> {
            this.props.afterInstall();
        })
    }

    render() {
        return (
            <Swiper>

                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('./img/1.jpg')}
                    >
                    </Image>
                </View>
                <View style={styles.slide1}>
                    <Image
                        style={styles.img}
                        source={require('./img/2.jpg')}
                    >
                        
                    </Image>
                    <TouchableOpacity style={styles.start} onPress={this.start}>
                        <Text style={{color:'white'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%',
    },
    slide1: {
        flex:1,
        height:'100%',
        alignItems:'center',
    },
    start: {
        width:150,
        height:50,
        backgroundColor:'blue',
        position:'absolute',
        bottom:'10%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }
})