import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create(
{ 
container:
{ 
	flex: 1,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
	flexDirection: 'row', 
	backgroundColor: '#FFEBEE',
	borderRadius: 4,
	alignItems: 'center', 
},
container1:
{ 
	flex: 1,
	padding: 16,
	flexDirection: 'row', 
	justifyContent: 'space-between',  
	alignItems: 'center', 
},

popcornImage:
{ 
  width: 25,
  height: 37,
},
breakText:
{
 fontSize: 15,
 fontWeight: 'bold',  
},

firstContainer:
    { 
      flexDirection: 'column',
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
   color: '#ed1717',
   marginLeft:4,
  },

  startMarker:
  {
  	position: 'absolute', 
  	width: 4,
  	borderTopLeftRadius: 4,
  	borderBottomLeftRadius: 4,
  	top: 0,
  	bottom: 0,
  	backgroundColor: '#ed1717',
  },
  endMarker:
  {
   position: 'absolute', 
   width: 4,
   borderTopRightRadius: 4,
   borderBottomRightRadius: 4, 
   top: 0, 
   bottom: 0,
   right: 0,
   backgroundColor: '#ed1717',
  },

});

const Break = (props) => (
<View style = {styles.container}>
	<View style={styles.startMarker}/>	
<View style = {styles.container1}>
	<Image source = {require('./popcorn.png')} style = {styles.popcornImage}/>
	<Text style={styles.breakText}>Break</Text>	
	<View style ={styles.firstContainer}>
      <Text style={styles.time}>10:00AM</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source = {require('./durationplaceholder.png')} style={styles.durationPlaceholder}/> 
        <Text style={styles.durationText}>45min</Text>
      </View>
    </View>
 </View>
	<View style={styles.endMarker}/>	
</View> 
);

export default Break;