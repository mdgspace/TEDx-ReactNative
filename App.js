import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Speakers from './components/speakers.js'
import InfoScreen from './components/info.js'

export default class App extends React.Component {
  render() {
    return (
      <InfoScreen/>
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
