import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  name: {
    marginLeft: 12,
    fontSize: 16,
  },
  designation: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  links:{
    height: 15,
    width: 15,
  }
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.image}} style={styles.photo} />
    <Text style={styles.name}>
      {`${props.name}`}
    </Text>
    <Text style={styles.designation}>
      {`${props.designation}`}
    </Text>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.links.fb)}`)} ><Image source={{ uri: fb}} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.links.linkedin)}`)} ><Image source={{ uri: linkedin}} style={styles.links} /></TouchableHighlight>
    <TouchableHighlight onPress={()=> this._linkPressed(`${(props.links.twitter)}`)} ><Image source={{ uri: twitter}} style={styles.links} /></TouchableHighlight>
    </View>
);

export default Row;