import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Schedule from './Schedule';

import Speakers from './components/speakers.js'
import InfoScreen from './components/info.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Speakers/>
        <BottomNav/>
        <InfoScreen/>
        <Schedule/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ed1717',
    alignItems: 'center',
  },
});