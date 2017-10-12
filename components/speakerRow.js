import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import Collapsible from 'react-native-collapsible';
import ImageLoad from 'react-native-image-placeholder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft:12,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    marginRight: 10,
    borderRadius: 3,
    borderWidth: 1.33,
    borderColor: '#e5e5e5',
    backgroundColor: '#fff'
  },
  innerContainer1: {
    flexDirection: 'row',
  },
  innerContainer2: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
  },
  name: {
    marginLeft: 16,
    fontSize: 13,
    marginBottom: 5
  },
  designation: {
    marginLeft: 16,
    fontSize: 9,
    marginTop: -5,
    color: 'rgba(0, 0, 0, 0.72)',
    marginBottom: 5
  },
  photo: {
    height: 90,
    width: 90,
    
  },
  placeholderImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor:'#ffffff'
  },
  links: {
    height: 22,
    width: 22,
    marginLeft: 12
  }, 
});

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    }
  }

  toggleViewState() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    return (
      <View style={styles.container} onPress={() => { this.setState = { isCollapsed: false } }}>
        <View style={{ flexDirection: 'row'}}>
          <View style={styles.innerContainer1}>
    <ImageLoad
     borderRadius={45}
      loadingStyle={{ size: 'small', color: 'red' }}
      placeholderStyle={styles.placeholderImage}
      placeholderSource={require('./../images/placeholder.png')}
      source={{uri: this.props.profile_pic}} 
      style={styles.photo}/>
          </View>
          <View style={styles.innerContainer2}>
            <View>
              <Text style={styles.name}>
                {this.props.name}
              </Text>
              <Text style={styles.designation}>
                {this.props.designation}
              </Text>
            </View>

            <View style={styles.innerContainer1}>
              <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.facebook)}`)} ><Image source={require('./../images/fb.png')} style={styles.links} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.linkedin)}`)} ><Image source={require('./../images/linkedin.png')} style={styles.links} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => Linking.openURL(`${(this.props.twitter)}`)} ><Image source={require('./../images/twitter.png')} style={styles.links} /></TouchableWithoutFeedback>
              <Text style={{ marginLeft: 9, color: '#ed1717', marginTop: 8, fontSize: 8 }} onPress={() => {
                this.toggleViewState()
              }}>{this.state.isCollapsed ? "MORE DETAILS" : "HIDE DETAILS"}</Text>
              {this.state.isCollapsed ? <TouchableWithoutFeedback onPress={() => {
                this.toggleViewState()
              }}><Image style={{ width: 8, height: 5, marginTop: 11, marginLeft: 2 }} source={require('./../images/down.png')} /></TouchableWithoutFeedback> : <TouchableWithoutFeedback onPress={() => {
                this.toggleViewState()
              }}><Image style={{ width: 8, height: 5, marginTop: 11, marginLeft: 2 }}
                source={require('./../images/up.png')} /></TouchableWithoutFeedback>}
            </View>


          </View>
        </View>
        <Collapsible collapsed={this.state.isCollapsed}>
          <View style={{marginTop:10}}>
            <Text style={{fontSize: 11}}>{this.props.about}</Text>
          </View>
        </Collapsible>
      </View>
    )
  }
}