import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { List, Card, ListItem, SearchBar } from "react-native-elements";

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

 
  render() {
    return (
    <View style = {styles.MainContainer}>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Card
              roundAvatar
              title ={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderRadius: 1 , marginBottom: 1, backgroundColor: '#ffffff' }}
          />

          )}
          keyExtractor={item => item.email}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    </View>
       );
  }
}

const styles = StyleSheet.create(
  {
	MainContainer:
	{
		flex: 1,
		backgroundColor: 'rgba(237, 23, 23, 0.5)',
		opacity: 0.5,
	}
  });
export default Schedule;