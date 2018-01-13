import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import RepositoryOverviewScreen from '../Screens/RepositoryOverviewScreen';
import AuthorScreen from '../Screens/AuthorScreen';
import RepositoryDetailScreen from '../Screens/RepositoryDetailScreen';
import { Constants } from 'expo';

const headerStyle = {
    backgroundColor: '#222',
    marginTop: Constants.statusBarHeight
};

const headerTitleStyle = {
    color: '#fff'
};

const RootNavigator = StackNavigator({
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
            header: null,
        })
    },
    RepositoryOverviewScreen: {
        screen: RepositoryOverviewScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle,
            headerTintColor: '#fff',
            title: "Respositories"
        })
    },
    AuthorScreen: {
        screen: AuthorScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle,
            headerTintColor: '#fff',
            title: "Author"
        })
    },
    RepositoryDetailScreen: {
        screen: RepositoryDetailScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle,
            headerTintColor: '#fff',
            title: "Repository Details"
        })
    }
}, {
    initialRouteName: "SearchScreen"
});

export default RootNavigator;