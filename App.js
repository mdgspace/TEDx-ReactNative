import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Schedule from './Schedule';

export default class App extends React.Component {
  render() {
    return (
      <Schedule style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ed1717',
    alignItems: 'center',
    justifyContent: 'center',
  },
});