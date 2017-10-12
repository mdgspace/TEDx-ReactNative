import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import ImageLoad from 'react-native-image-placeholder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 3,
    borderWidth: 1.33,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff'

  },
  innerContainer1: {
    flexDirection: 'row',
    marginRight: 30
  },
  innerContainer2: {
    flexDirection: 'column',
  },
  name: {
    marginLeft: 12,
    fontSize: 20,
  },
  designation: {
    marginLeft: 12,
    fontSize: 12,
    marginTop: -5,
    color: 'rgba(0, 0, 0, 0.72)',
    marginBottom: 5
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  placeholderImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  links: {
    height: 30,
    width: 30,
    marginLeft: 12
  },

});

const Row = (data) => (
  <View style={styles.container}>
    <View style={styles.innerContainer1}>
    <ImageLoad
      borderRadius={50}
      loadingStyle={{ size: 'small', color: 'red' }}
      placeholderStyle={styles.placeholderImage}
      placeholderSource={require('./../images/placeholder.png')}
      source={{uri: data.profile_pic}} 
      style={styles.photo}/>
    </View>
    <View style={styles.innerContainer2}>
      <Text style={styles.name}>
        {`${data.name}`}{'\n'}
      </Text>
      <Text style={styles.designation}>
        {`${data.designation}`}{'\n'}
      </Text>
      <View style={styles.innerContainer1}>
        <TouchableWithoutFeedback onPress={() =>  Linking.openURL(`${(data.facebook)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() =>  Linking.openURL(`${(data.linkedin)}`)} ><Image source={require('./../images/linkedin.png')} style={styles.links} /></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() =>  Linking.openURL(`${(data.twitter)}`)} ><Image source={require('./../images/twitter.png')} style={styles.links} /></TouchableWithoutFeedback>
      </View>
    </View>
  </View>
);

export default Row;