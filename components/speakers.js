import React from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import Tabs from 'react-native-tabs';
import Row from './speakerRow.js'

var globalYear = 0

export default class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState(
      { isLoading: true }
    );
    //change end points
    console.log('http://13.59.205.85/api/speakers/event/' + globalYear);
    return fetch('http://13.59.205.85/api/speakers/event/' + globalYear)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
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
          <Tabs onSelect={el => { globalYear = el.props.name; console.log('year' + globalYear); console.log('tab' + el.props.name); this.componentDidMount() }}
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
      <View style={styles.container}>
        <Tabs onSelect={el => { globalYear = el.props.name; console.log('year' + globalYear); console.log('tab' + el.props.name); this.componentDidMount() }}
          selected={globalYear} style={{ backgroundColor: '#FFFFFF', top: 0, borderBottomColor: '#e0e0e0', borderBottomWidth: 1 }}
          selectedStyle={{ color: '#ed1717' }}>
          <Text name="0">2017(2.0)</Text>
          <Text name="1">2017</Text>
          <Text name="2">2016</Text>
          <Text name="3">2015</Text>
        </Tabs>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.03)', marginTop: 50 }}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Row {...rowData} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 130
  },
});
