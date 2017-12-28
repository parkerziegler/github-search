import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Avatar } from 'react-native-elements';
import { WebBrowser } from 'expo';

const query = gql`
    query repositoryOwner($login: String!) {
        repositoryOwner(login: $login) {
            url,
            avatarUrl(size: 100)
        }
    }`;

const RepositoryOwner = (props) => {

    const { loading, data, error } = props;

    const handleAvatarPress = async () => {

        await WebBrowser.openBrowserAsync(data.repositoryOwner.url);
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error...</Text>;
    }

    if (data.repositoryOwner) {

        return (
            <Avatar
                large
                rounded
                source={{ uri: data.repositoryOwner.avatarUrl }}
                onPress={handleAvatarPress} />
        );
    }

    return null;
};

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default compose(
    connect(mapStateToProps),
    graphql(query, { options: ({ search: { searchInput } }) => ({ variables: { login: searchInput }}) })
)(RepositoryOwner);