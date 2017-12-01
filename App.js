import React from 'react';
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import UserSearch from './app/components/Search/UserSearch';
import RepositoryList from './app/components/Repository/RepositoryList';
import { token } from './config';

export default class App extends React.Component {

  state = {
    loading: false,
    repos: [],
    avatar: null,
    searchInput: ''
  }

  onSubmitHandler = () => {

    // destructure state
    const { searchInput } = this.state;

    // flag state as loading
    this.setState({
      loading: true
    });

    // format our GraphQL query
    const query = `query {
      repositoryOwner(login: "${searchInput}") {
        url,
        avatarUrl(size: 100),
        repositories(first: 5) {
          nodes {
            name,
            description
          }
        }
      }
    }`;

    /* make the request to the GitHub GraphQL API. we'll store
    the repos and user avatar in state. */
    fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: { 'Authorization': 'bearer ' + token }
    })
      .then(res => res.json())
      .then(res => {

        this.setState({
          loading: false,
          repos: res.data.repositoryOwner.repositories.nodes,
          avatar: res.data.repositoryOwner.avatarUrl
        });
      })
      .catch(err => console.log(err));
  }

  render() {

    // destructure state
    const { loading, repos, searchInput, avatar } = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.statusBarBackground}></View>
          <View style={styles.titleContainer}>
            <Image
              style={{ width: 100, height: 40 }}
              source={require('./assets/GitHub_Logo.png')} />
            <Text style={styles.title}>Search</Text>
          </View>
          {!repos.length
          ? <Image
              style={{ width: 100, height: 100, marginBottom: 20 }}
              source={require('./assets/GitHub-Mark-120px-plus.png')}/>
          : null}
          <UserSearch onChangeText={text => this.setState({ searchInput: text })} searchInput={searchInput} />
          <Button title="Search" onPress={this.onSubmitHandler}/>
          {!loading && avatar
            ? <Image
              style={{width: 50, height: 50}}
              source={{ uri: avatar }}/>
            : null}
          {!loading && repos.length ? <RepositoryList repos={repos} /> : null}
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
    padding: 20
  },
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: "white",
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 28,
    fontFamily: (Platform.OS === 'ios') ? "Avenir Next" : "Roboto"
  }
});
