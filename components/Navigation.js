import React from 'react';
import { StyleSheet, Text, View, Navigator} from 'react-native';
import InfoScreen from './info.js'
import Sponsors from './sponsors.js'

class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute=\{\{id: 'about'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'about':
        return (<InfoScreen navigator={navigator} title='about'/>);
      case 'sponsors':
        return (<Sponsors navigator={navigator} title='sponsors' />);
    }
  }
}