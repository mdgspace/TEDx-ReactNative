import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

var styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 16,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
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
      flex: 1,
      flexDirection: 'column',
    },

    secondContainer:
    {
      flex: 1,
      marginLeft: 12,
      flexDirection: 'column',
    },
    thirdContainer:
    {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: 10,
    },

    speaker:
    {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 9,
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
      marginLeft: 6,
    },

    speakerImage:
    {
      height: 27,
      width: 27,
    },

    topic:
    {
      fontSize: 12,
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
      height: 10,
      width: 10,
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
            <Text style={styles.time}>10:00AM</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./../images/durationplaceholder.png')} style={styles.durationPlaceholder} />
              <Text style={styles.durationText}>45min</Text>
            </View>
          </View>

          <View style={styles.secondContainer}>
            <Text style={styles.topic}>{this.props.theme}</Text>
            <View style={styles.speaker}>
              <Image source={require('./../images/iitr.png')} style={styles.speakerImage} />
              <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
                <Text style={styles.speakerName}>Vivek Anand</Text>
                <Text style={styles.speakerDesignation}>Designer</Text>
              </View>
            </View>
          </View>
          <View style={styles.thirdContainer} onPress={() => {
                this.toggleViewState()
              }}>
            <Text style={styles.additionalDetails} onPress={() => {
                this.toggleViewState()
              }}>{this.state.isCollapsed ? 'VIEW PROFILE' : 'HIDE PROFILE'}</Text>
            {this.state.isCollapsed ? <Image source={require('./../images/down.png')} style={styles.dropdownimage} /> : <Image source={require('./../images/up.png')} style={styles.dropdownimage} />}
          </View>
        </View>
        <Collapsible collapsed={this.state.isCollapsed}>
          <View>
            <Text>
              this.setStatere  giste\se}) but it is not causing the re render of the parent (index.ios.js). Is the a super(state) method or something similar that I am missing ? I believe the parent state is not getting the values of the updated register variable
            </Text>
          </View>
        </Collapsible>
      </View>
    )
  }
}