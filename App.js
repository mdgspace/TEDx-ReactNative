import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Speakers from './components/speakers.js'
import BottomNav from './components/bottomnav.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Speakers />
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
