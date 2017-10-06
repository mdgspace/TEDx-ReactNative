import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    padding: 12,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFEBEE',
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
      justifyContent: 'center',
      alignItems: 'flex-end',   
    },
    
    speaker:
    { 
      marginTop: 8,
      flexDirection: 'row',
    },

  time:
  { 
    color: '#ed1717',
    fontSize: 12,
  },

  durationPlaceholder:
  { 
    width: 20,
    height: 20,
  },

  durationText:
  {
   fontSize: 10,
   color: '#929292',
  },

  speakerImage:
  {
   height: 30,
   width: 30,
  },

  topic:
  {fontSize: 12,
   fontWeight:'bold',  
  },

  speakerName:
  {
    fontSize: 10,
  },

  speakerDesignation:
  {
    fontSize: 8,
  },

  additionalDetails:
  {
   fontSize: 11,
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
      <Text style={styles.durationText}>45min</Text>
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
