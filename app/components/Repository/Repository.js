import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';

export default class Repository extends React.Component {

    handleTitlePress = async () => {

        const { url } = this.props;

        await WebBrowser.openBrowserAsync(url);
    }

    render() {

        const { name, description, url } = this.props;

        return (
            <View style={styles.repoContainer}>
                <Button title={name} iconRight={{name: "call-made", color: "#000"}} small onPress={this.handleTitlePress} backgroundColor="#A1A1A1" textStyle={styles.repoName} buttonStyle={{alignSelf: 'flex-start'}} />
                <Text style={styles.repoDescription}>{description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    repoContainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'red'
    },
    repoName: {
        color: '#000000',
        fontSize: 20,
        fontFamily: (Platform.OS === 'ios') ? "Avenir Next" : "Roboto",
        fontWeight: (Platform.OS === 'ios') ? "500" : "700"
    },
    repoDescription: {
        fontSize: 14
    }
});
