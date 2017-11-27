import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Repository from './Repository';

export default class RepositoryList extends Component {

    renderItem = ({ item }) => {
        return <Repository name={item.name} description={item.description} />;
    }

    render() {

        const { repos } = this.props;

        return (
            <FlatList data={repos}
                renderItem={(repo) => this.renderItem(repo)} keyExtractor={(item, index) => index} />
        );
    }
}
