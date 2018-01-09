import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import RepositoryScreen from '../Screens/RepositoryScreen';
import AuthorScreen from '../Screens/AuthorScreen';
import { Button } from 'react-native-elements';
import { Constants } from 'expo';

const RepositoryOwnerNavigator = StackNavigator({
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
    RepositoryScreen: {
        screen: RepositoryScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { marginTop: Constants.statusBarHeight },
            title: "Search"
        })
    },
    AuthorScreen: {
        screen: AuthorScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { marginTop: Constants.statusBarHeight },
            title: "Repositories"
        })
    }
}, {
    initialRouteName: "SearchScreen"
});

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        borderColor: 'red',
        borderWidth: 1
    }
});

export default RepositoryOwnerNavigator;