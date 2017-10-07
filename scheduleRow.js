import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#FFEBEE',
    borderRadius: 2,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1.33
    },
    flexDirection: 'row',
  },

    firstContainer:
    { flex: 1,
      flexDirection: 'column',
    },
    
    secondContainer:
    { flex: 1,
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
  {fontSize: 12,
   color: '#0e0e0e',
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
   color : 'rgba(0, 0, 0, 0.58)', 
  },

  dropdownimage:
  { 
    height: 10,
    width: 10,
    marginLeft: 5,
  }

  });


const Row = (props) => (
  <View style={styles.container}>
    <View style ={styles.firstContainer}>
      <Text style={styles.time}>10:00AM</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source = {require('./durationplaceholder.png')} style={styles.durationPlaceholder}/> 
        <Text style={styles.durationText}>45min</Text>
      </View>
    </View>
  
    <View style ={styles.secondContainer}>
        <Text style={styles.topic}>{props.theme}</Text>
            <View style={styles.speaker}>
                <Image source = {require('./iitr.png')} style={styles.speakerImage}/>
                    <View style={{flexDirection: 'column', marginLeft: 10,justifyContent:'center'}}>
                      <Text style = {styles.speakerName}>Vivek Anand</Text>
                      <Text style = {styles.speakerDesignation}>Designer</Text>
                    </View>
            </View>
    </View>
    <View style ={styles.thirdContainer}>
      <Text style={styles.additionalDetails}>VIEW PROFILE</Text>
      <Image source={require('./dropdown.png')} style={styles.dropdownimage}/>
    </View>
  </View>
);

export default Row;
