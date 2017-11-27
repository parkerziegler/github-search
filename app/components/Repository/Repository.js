import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Repository extends React.Component {

    render() {

        const { name, description } = this.props;

        return (
            <View style={styles.repoContainer}>
                <Text style={styles.repoName}>{name}</Text>
                <Text style={styles.repoDescription}>{description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    repoContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    repoName: {
        color: '#2BBEE0',
        fontSize: 20
    },
    repoDescription: {
        fontSize: 14
    }
});
