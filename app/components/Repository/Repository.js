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
                <Button title={name} iconRight={{name: "call-made", color: "#000"}} small onPress={this.handleTitlePress} textStyle={styles.repoName} backgroundColor="#FFF" buttonStyle={{alignSelf: 'flex-start', paddingBottom: 0.5, paddingLeft: 0}} containerViewStyle={{borderBottomColor: '#000', borderBottomWidth: 1, marginLeft: 0, marginRight: 0}}/>
                <Text style={styles.repoDescription}>{description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    repoContainer: {
        display: 'flex',
        flex: 1,
        marginBottom: 5
    },
    repoName: {
        color: '#000000',
        fontSize: 20,
        fontFamily: (Platform.OS === 'ios') ? "HelveticaNeue" : "Roboto",
        fontWeight: (Platform.OS === 'ios') ? "500" : "700"
    },
    repoDescription: {
        fontSize: 14
    }
});
