import React, { Component } from "react";
import { View, Text, ListView, ActivityIndicator, Image, StyleSheet } from "react-native";
import { List, Card, ListItem, SearchBar } from "react-native-elements";
import Row from './scheduleRow.js'

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });   

class Schedule extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([]),
      loading: false,     
      error: null,
    };
  }

  componentDidMount() {
      this.makeRemoteRequest();
  }

  

  makeRemoteRequest = () => {
    //api url needs to be changed
    const url = 'https://tedxiitr.herokuapp.com/api/events/?format=json';
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(responseJson => {
         this.setState({
          loading: false,
          dataSource: ds.cloneWithRows(responseJson),
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator/>
        </View>
      );
    }

      return (
      <View style={styles.container}>
          <View style = {styles.topBar}/>
          <View style = {styles.labelBar}>
            <Image source={require('./label.png')} style={styles.labelImage}/>
          </View>
          <ListView 
            style={{marginTop:25}}
            dataSource = {this.state.dataSource}
            renderRow = {(item) => <Row {...item}/>}
          />
      </View>    
      );
  }
};

const styles = StyleSheet.create(
  {
    container:
    {flex:1,
    },

    topBar:
    { height: 25,
      backgroundColor: '#000000',
    },
    labelBar:
    {height: 47,
     justifyContent: 'center',
    },
    labelImage:
    { width: 99,
      height: 18,
      marginLeft:16,
    },

  });

export default Schedule;