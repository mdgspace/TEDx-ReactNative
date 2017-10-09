  import React, { Component } from "react";
  import { View, Text, ListView, ActivityIndicator, Image, StyleSheet } from "react-native";
  import { List, Card, ListItem, SearchBar } from "react-native-elements";
  import Tabs from 'react-native-tabs';
  import Row from './scheduleRow.js'
  import Break from './break.js'
  import EventItem from './EventItem.js'

  var globalYear = 0;
  var responseData;
  class EventMain extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        data:[],
        };
    }
      componentDidMount() {
      this.setState(
        { isLoading: true }
      );
      //change end points
      console.log('http://13.59.205.85/api/events/' + globalYear);
      return fetch('http://13.59.205.85/api/events/' + globalYear)
        .then((response) => response.json())
        .then((responseJson) => {
          responseData = responseJson[0];
          
          this.setState({
            isLoading: false,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

   
    render() {
  if (this.state.isLoading) {
      return (
          <View style={{ flex: 1, paddingTop: 50 }}>
            <Tabs onSelect={el => { globalYear = el.props.name; this.componentDidMount() }}
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
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.03)', flex: 1}}>
           <Tabs onSelect={el => { globalYear = el.props.name; console.log('year' + globalYear); console.log('tab' + el.props.name); this.componentDidMount() }}
            selected={globalYear} style={{ backgroundColor: '#FFFFFF', top: 0, borderBottomColor: '#e0e0e0', borderBottomWidth: 1 }}
            selectedStyle={{ color: '#ed1717' }}>
              <Text name="0">2017(2.0)</Text>
              <Text name="1">2017</Text>
              <Text name="2">2016</Text>
              <Text name="3">2015</Text>
          </Tabs>
          <View style={{backgroundColor:'rgba(0,0,0,0.03)',marginTop: 50, flex: 1}}>
            <EventItem {...responseData} />
          </View>
        </View> 
        );
    }
  };

  export default EventMain;