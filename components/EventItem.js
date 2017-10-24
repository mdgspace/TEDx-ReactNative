import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create(
{container:
{marginTop: 0, 
},
emptyContainer:
{ flex: 1,
  marginTop: 0,
  justifyContent: 'center',
  alignItems: 'center',
},

description:
{
 marginLeft: 16,
 marginRight:16,
 marginTop: 16,
 padding: 16,
 backgroundColor: '#FFFFFF',
 borderRadius: 4,
 borderWidth: 1.33,
 borderColor: '#e5e5e5',
},
});

class EventItem extends Component {
  
  render() {
  if(Object.keys(this.props).length===0){
    return(
    <View style={styles.emptyContainer}>
      <Text>
          No data to display
      </Text>
    </View>
      );
  }
  return (
<View style={styles.container}> 
<View style={styles.description}>
  <Text style={{color: '#ed1717', fontSize: 13 ,fontWeight: '600'}}>{this.props.theme}</Text>
  <Text style={{fontSize: 13,color: '#0e0e0e'}}>{this.props.description}</Text>
</View>

<View style={styles.description}>
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{color: 'rgba(7, 3, 3, 0.52)', fontSize: 10 ,fontWeight: '600'}}>DATE</Text>
    <Text style={{color: 'rgba(7, 3, 3, 0.52)', fontSize: 10 ,fontWeight: '600'}}>VENUE</Text>

  </View>
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text style={{fontSize: 12, color: '#ed1717', fontWeight: '600'}}>{this.props.timestamp}</Text>
    <Text style={{fontSize: 12, color: '#ed1717', fontWeight: '600'}}>{this.props.venue}</Text>
  </View> 
</View>
</View>

);
}
}

export default EventItem;