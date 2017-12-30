import React from 'react';
import { StackNavigator } from 'react-navigation';
import RepositoryScreen from '../Screens/RepositoryScreen';
import AuthorScreen from '../Screens/AuthorScreen';

const RepositoryOwnerNavigator = StackNavigator({
    RepositoryScreen: {
        screen: RepositoryScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Repositories',
            header: null
        })
    },
    AuthorScreen: {
        screen: AuthorScreen
    }
}, {
    initialRouteName: "RepositoryScreen"
});

export default RepositoryOwnerNavigator;