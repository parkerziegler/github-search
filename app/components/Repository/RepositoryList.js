import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Repository from './Repository';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    query repositoryOwner($login: String!) {
        repositoryOwner(login: $login) {
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

class RepositoryList extends Component {

    renderItem = ({ item }) => {
        return <Repository name={item.name} description={item.description} url={item.url} />;
    }

    render() {

        const { repositoryOwner } = this.props.data;
        const data = repositoryOwner ? repositoryOwner.repositories.nodes : [];

        return (
            <FlatList data={data}
                renderItem={(repo) => this.renderItem(repo)} keyExtractor={(item, index) => index} />
        );
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(graphql(query, { options: ({ search: { searchInput } }) => ({ variables: { login: searchInput }}) })(RepositoryList));

