 import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Moment from 'moment';

var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 16,
      marginBottom: 8,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
      borderWidth: 1.33,
      borderColor: '#e5e5e5',
      flexDirection: 'column',
    },

    container1:{
      flex: 1,
      flexDirection: 'row',
    },

    firstContainer:
    {
      flexDirection: 'column',
    },

    secondContainer:
    { 
      flex:1, 
      flexDirection: 'column',

    },
    
    speaker:
    {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 9,
      flex:1,
      marginLeft: 30,
    },

    time:
    {
      color: '#ed1717',
      fontSize: 12,
    },

    durationPlaceholder:
    {
      width: 7,
      height: 7,
    },

    durationText:
    {
      fontSize: 9,
      color: '#929292',
      marginLeft: 4,
    },

    speakerImage:
    {
      height: 27,
      width: 27,
    },

    topic:
    {
      fontSize: 12,
      marginLeft: 30,
      color: '#0e0e0e',
      fontWeight: 'bold',
    },

    speakerName:
    {
      fontSize: 9,
      color: 'rgba(14, 14, 14, 0.9)',
    },

    speakerDesignation:
    {
      fontSize: 7,
      color: 'rgba(0, 0, 0, 0.72)',
    },

    additionalDetails:
    {  
      fontSize: 8,
      color: '#ed1717',
    },

    dropdownimage:
    { 
      resizeMode: 'contain',
      height:10,
      width:10,
      marginLeft: 5,
      
    }

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
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.firstContainer}>
            <Text style={styles.time}>{Moment(this.props.start_time).utcOffset('+0000').format('LT')}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./../images/durationplaceholder.png')} style={styles.durationPlaceholder} />
              <Text style={styles.durationText}>{this.props.duration+'min'}</Text>
            </View>
          </View>

          <View style={styles.secondContainer}>
            <Text style={styles.topic}>{this.props.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <View style={styles.speaker}>
                <Image source={{uri : this.props.speaker.profile_pic}} style={styles.speakerImage} />
                <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
                  <Text style={styles.speakerName}>{this.props.speaker.name}</Text>
                  <Text style={styles.speakerDesignation}>{this.props.speaker.designation}</Text>
                </View>
              </View>
              <View style={{marginBottom: 13, flexDirection: 'row', marginRight:5 }}>
              <Text style={styles.additionalDetails} onPress={() => {
                  this.toggleViewState()}}>{this.state.isCollapsed ? 'VIEW PROFILE' : 'HIDE PROFILE'}</Text>
                    {this.state.isCollapsed ? <Image source={require('./../images/down.png')} style={styles.dropdownimage} /> : <Image source={require('./../images/up.png')} style={styles.dropdownimage} />}
              </View>
            </View> 
          </View>
          
        </View>
        <Collapsible collapsed={this.state.isCollapsed}>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 11}}>
            {this.props.speaker.about}
            </Text>
          </View>
        </Collapsible>
      </View>
    )
  }
}