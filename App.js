import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Schedule from './components/Schedule';
import Speakers from './components/speakers.js'
import InfoScreen from './components/info.js'
import BottomNav from './components/bottomnav.js'

export default class App extends React.Component {
  render() {
    return (
      //   <Speakers/>
      //   <BottomNav/>
      //   <InfoScreen/>
      //   <Schedule/>
      // </View>

      <View style={styles.container}>
        <BottomNav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ed1717',
  },
});