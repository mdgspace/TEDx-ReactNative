import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './components/bottomnav.js'

export default class App extends React.Component {
  render() {
    return (
      <BottomNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
