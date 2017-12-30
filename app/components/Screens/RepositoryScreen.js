import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import StatusBar from '../../constants/StatusBar';
import RepositoryOwner from '../Repository/RepositoryOwner';
import RepositoryList from '../Repository/RepositoryList';
import { toggleRepos } from '../../actions/searchActions';

const query = gql`
    query repositoryOwner($login: String!) {
        repositoryOwner(login: $login) {
            url,
            avatarUrl(size: 100),
            repositories(first: 5) {
                nodes {
                    name,
                    description,
                    url
                }
            }
        },
        user(login: $login) {
            name,
            login
        }
    }`;

class RepositoryScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    onBackHandler = () => {

        const { dispatch } = this.props;

        dispatch(toggleRepos(false));
    }

    render() {

        const { data, loading, error, navigation } = this.props;

        if (data.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <StatusBar />
                {data.repositoryOwner && <RepositoryOwner url={data.repositoryOwner.url} avatarUrl={data.repositoryOwner.avatarUrl} name={data.user.name} login={data.user.login} navigation={navigation} />}
                {data.repositoryOwner && <RepositoryList repos={data.repositoryOwner.repositories.nodes} />}
                <Button small icon={{name: "chevron-left"}} title="Back" onPress={this.onBackHandler} backgroundColor="#000000" style={styles.button} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default compose(
    connect(mapStateToProps),
    graphql(query, { options: ({ search: { searchInput } }) => ({ variables: { login: searchInput }}) })
)(RepositoryScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
});