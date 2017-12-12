import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import UserSearch from './app/components/Search/UserSearch';
import RepositoryList from './app/components/Repository/RepositoryList';
import { token } from './config';
import { flagLoading, getRepos, getAvatar } from './app/actions/searchActions';

class Main extends React.Component {

    onSubmitHandler = () => {

        // destructure props
        const { dispatch, search } = this.props;

        // flag state as loading
        dispatch(flagLoading(true));

        // format our GraphQL query
        const query = `query {
            repositoryOwner(login: "${search.searchInput}") {
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
        the repos and user avatar in redux. */
        fetch('https://api.github.com/graphql', {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: { 'Authorization': 'bearer ' + token }
        })
            .then(res => res.json())
            .then(res => {

                console.log(res);
                
                // send the repos and avatar to redux
                dispatch(getRepos(res.data.repositoryOwner.repositories.nodes));
                dispatch(getAvatar(res.data.repositoryOwner.avatarUrl));
                
                // mark the state as done loading
                dispatch(flagLoading(false));
            })
            .catch(err => console.log(err));
    }

    render() {

    // destructure props
    const { loading, repos, searchInput, avatar } = this.props.search;

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
            <UserSearch />
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

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(Main);

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