import React from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import Row from './speakerRow.js'

export default class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://tedxiitr.herokuapp.com/api/speakers/?format=json')
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
        <View style={styles.container}><ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row {...rowData}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 56
  },
});
