import React, {Component} from 'react'
import {Button, SafeAreaView} from 'react-native'
// 控制父级 Drawer 的 Actions 也是整个 RNRF 的控制器
import {Actions} from 'react-native-router-flux'
export default class Home extends Component {
    _openDrawer = () => {
        // 关闭用 Actions.drawerClose()
        Actions.drawerOpen()
    };
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Button onPress={this._openDrawer} title={'OpenDrawer'}/>
            </SafeAreaView>
        )
    }
}
