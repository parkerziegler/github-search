import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebBrowser } from 'expo';

export default class Repository extends React.Component {

    handleTitlePress = async () => {

        const { url } = this.props;

        await WebBrowser.openBrowserAsync(url);
    }

    render() {

        const { name, description } = this.props;

        return (
            <View style={styles.repoContainer}>
                <Button style={styles.repoName} onPress={this.handleTitlePress} title={name}/>
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
