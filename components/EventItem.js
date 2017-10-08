import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create(
{container:
{marginTop: 75, 
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
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,     
      error: null,
      data: [],
    };
  }

  componentDidMount() {
      this.makeRemoteRequest();
  }

  

  makeRemoteRequest = () => {
    //api url needs to be changed
var API_URL = 'https://tedxiitr.herokuapp.com/api/events';
var PAGE_SIZE = 1;
var PARAMS = '?page=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;
    this.setState({ loading: true });

    fetch(API_URL)
      .then((res) => res.json())
      .then((responseJson) => {
         this.setState({
          loading: false,
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  render() {
  if (this.state.loading) {
      return (
        <View style={{ flex: 1, marginTop: 100}}>
          <ActivityIndicator/>
        </View>
      );
    }
  return (
<View style={styles.container}>	
<View style={styles.description}>
	<Text style={{color: '#ed1717', fontSize: 13 ,fontWeight: '600'}}>SYMPHONIC CHAOS</Text>
	<Text style={{fontSize: 13,color: '#0e0e0e'}}>The theme for TEDxIITRoorkee 2017 is Symphonic Chaos. The theme underlines the beauty of spontaneity, the 'chaos' and how an </Text>
</View>

<View style={styles.description}>
	<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
		<Text style={{color: 'rgba(7, 3, 3, 0.52)', fontSize: 10 ,fontWeight: '600'}}>DATE</Text>
		<Text style={{color: 'rgba(7, 3, 3, 0.52)', fontSize: 10 ,fontWeight: '600'}}>VENUE</Text>

	</View>
	<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
		<Text style={{fontSize: 12, color: '#ed1717', fontWeight: '600'}}>{this.props.fetchParam}</Text>
		<Text style={{fontSize: 12, color: '#ed1717', fontWeight: '600'}}>Mac auditorium</Text>
	</View>	
</View>
</View>

);
}
}

export default EventItem;