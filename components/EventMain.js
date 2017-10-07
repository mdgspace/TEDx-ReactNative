import React, { Component } from "react";
import { View, Text, ListView, ActivityIndicator, Image, StyleSheet } from "react-native";
import { List, Card, ListItem, SearchBar } from "react-native-elements";
import Tabs from 'react-native-tabs';
import Row from './scheduleRow.js'
import Break from './break.js'
import EventItem from './EventItem.js'


class EventMain extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      page: 'first',
      currentYear: 2017,  //to be used as param in request
      };
  }

 
  render() {
  
  return (

      <View>
         <Tabs selected={this.state.page} style={{backgroundColor:'#FFFFFF', top:0, marginTop:25}}
              selectedStyle={{color:'#ed1717'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="first">2017(2.0)</Text>
            <Text name="second">2017</Text>
            <Text name="third">2016</Text>
            <Text name="fourth">2015</Text>
        </Tabs>
          <EventItem fetchParam={this.state.page} />
      </View> 
      );
  }
};

export default EventMain;