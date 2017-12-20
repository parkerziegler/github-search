import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Repository from './Repository';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
    query {
        repositoryOwner(login: "parkerziegler") {
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
        return <Repository name={item.name} description={item.description} />;
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

export default graphql(query)(RepositoryList);

