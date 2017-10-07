import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Schedule from './components/Schedule.js';
import Speakers from './components/speakers.js'
import InfoScreen from './components/info.js'
import BottomNav from './components/bottomnav.js'
import EventItem from './components/EventItem.js'
import TopBar from './components/topbar.js'
import EventMain from './components/EventMain.js'


export default class App extends React.Component {
  render() {
    return (
      <EventMain style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ed1717',
  },
});