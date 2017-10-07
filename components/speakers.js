import React from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import Tabs from 'react-native-tabs';
import Row from './speakerRow.js'

export default class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      year:2017.2,  //default param to pass for getting data
    }
  }

  componentDidMount() {
    console.log('http://tedxiitr.herokuapp.com/api/speakers/year/'+this.state.year);
    return fetch('http://tedxiitr.herokuapp.com/api/speakers/year/'+this.state.year)
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
              <View style={{flex: 1, paddingTop: 50}}>
                <ActivityIndicator />
              </View>
            );
          }
        return (
        <View style={styles.container}>
        <Tabs selected={this.state.year} style={{backgroundColor:'#FFFFFF', top:0, borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}
              selectedStyle={{color:'#ed1717'}} onSelect={el=>{this.setState({year:el.props.name}); console.log(this.state.year);this.componentDidMount()}}>
            <Text name="2017.2">2017(2.0)</Text>
            <Text name="2017.1">2017</Text>
            <Text name="2016">2016</Text>
            <Text name="2015">2015</Text>
        </Tabs>
        <ListView
          style={{marginTop: 65}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row {...rowData}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 56
  },
});
