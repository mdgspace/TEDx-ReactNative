import React from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight, Platform, TouchableNativeFeedback } from 'react-native';

export default class BottomNav extends React.Component {

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return (
      <View style={styles.container}>
        <TouchableElement onPress={() => {
          //call some method here
        }}>
          <View style={styles.icon}>

            <Image style={styles.image}
              source={require('./../images/speakers-red.png')}
            />
          </View>
        </TouchableElement>
        <TouchableElement onPress={() => {
          //call some method here
        }}>
          <View style={styles.icon}>

            <Image style={styles.image}
              source={require('./../images/schedule-black.png')}
            />
          </View>
        </TouchableElement>
        <TouchableElement onPress={() => {
          //call some method here
        }}>
          <View style={styles.icon}>

            <Image style={styles.image}
              source={require('./../images/events-black.png')}
            />
          </View>
        </TouchableElement>
        <TouchableElement onPress={() => {
          //call some method here
        }}>
          <View style={styles.icon}>
            <Image style={styles.image}
              source={require('./../images/about-black.png')}
            />
          </View>
        </TouchableElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .12,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 30,
    elevation: 10,
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 12,
    height: 45,
    width: 45,

  },
  image: {
    height: null,
    width: null,
    flex: 1
  }

});
