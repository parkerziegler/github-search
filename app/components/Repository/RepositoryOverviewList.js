import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import RepositoryOverview from './RepositoryOverview';

class RepositoryOverviewList extends Component {

    constructor(props) {
        super(props);
    }

    renderItem = ({ item }) => {
        return <RepositoryOverview name={item.name} description={item.description} url={item.url} />;
    }

    render() {

        const { repos } = this.props;

        return (
            <FlatList data={repos}
                renderItem={(repo) => this.renderItem(repo)} keyExtractor={(item, index) => index} />
        );
    }
}

export default RepositoryOverviewList;
