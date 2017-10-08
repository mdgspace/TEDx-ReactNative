import React, { Component } from "react";
import { View, Text, ListView, ActivityIndicator, Image, StyleSheet } from "react-native";
import { List, Card, ListItem, SearchBar } from "react-native-elements";
import Tabs from 'react-native-tabs';
import Row from './scheduleRow.js'
import Break from './break.js'
import EventItem from './EventItem.js'

var globalYear = 0;

class EventMain extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: '0',
      };
  }
    componentDidMount() {
      this.makeRemoteRequest();
  }

  

  makeRemoteRequest = () => {
    //api url needs to be changed
var API_URL = 'http://13.59.205.85/api/events/'+globalYear;
console.log(API_URL);
    this.setState({ isLoading: true });

    fetch(API_URL)
      .then((res) => res.json())
      .then((responseJson) => {
         this.setState({
          isLoading: false,
          data: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };


 
  render() {
           //console.log(this.state.data.theme);
if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 50 }}>
          <Tabs onSelect={el => { globalYear = el.props.name; this.makeRemoteRequest(); }}
          selected={globalYear} style={{ backgroundColor: '#FFFFFF', top: 0, borderBottomColor: '#e0e0e0', borderBottomWidth: 1 }}
          selectedStyle={{ color: '#ed1717' }}>
          <Text name="0">2017(2.0)</Text>
          <Text name="1">2017</Text>
          <Text name="2">2016</Text>
          <Text name="3">2015</Text>
        </Tabs>
          <ActivityIndicator style={{marginTop: 10}} />
        </View>
      );
    }
  return (
      <View style={{backgroundColor: 'rgba(237, 23, 23, 0.01)', flex: 1}}>
         <Tabs onSelect={el => { globalYear = el.props.name; console.log('year' + globalYear); console.log('tab' + el.props.name); this.componentDidMount(); }}
          selected={globalYear} style={{ backgroundColor: '#FFFFFF', top: 0, borderBottomColor: '#e0e0e0', borderBottomWidth: 1 }}
          selectedStyle={{ color: '#ed1717' }}>
            <Text name="0">2017(2.0)</Text>
            <Text name="1">2017</Text>
            <Text name="2">2016</Text>
            <Text name="3">2015</Text>
        </Tabs>
        <View style={{backgroundColor:'rgba(0,0,0,0.03)',marginTop: 50, flex: 1}}>
          <EventItem props={this.state.data} />
        </View>
      </View> 
      );
  }
};

export default EventMain;