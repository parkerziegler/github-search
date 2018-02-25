import { StackNavigator } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import RepositoryOverviewScreen from '../Screens/RepositoryOverviewScreen';
import AuthorScreen from '../Screens/AuthorScreen';
import RepositoryDetailScreen from '../Screens/RepositoryDetailScreen';
import ErrorScreen from '../Screens/ErrorScreen';
import { Constants } from 'expo';

const headerStyle = {
  backgroundColor: '#222',
  marginTop: Constants.statusBarHeight,
};

const RootNavigator = StackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    RepositoryOverviewScreen: {
      screen: RepositoryOverviewScreen,
      navigationOptions: () => ({
        headerStyle,
        headerTintColor: '#fff',
        title: 'Respositories',
      }),
    },
    AuthorScreen: {
      screen: AuthorScreen,
      navigationOptions: () => ({
        headerStyle,
        headerTintColor: '#fff',
        title: 'Author',
      }),
    },
    RepositoryDetailScreen: {
      screen: RepositoryDetailScreen,
      navigationOptions: () => ({
        headerStyle,
        headerTintColor: '#fff',
        title: 'Repository Details',
      }),
    },
    ErrorScreen: {
      screen: ErrorScreen,
      navigationOptions: () => ({
        headerStyle,
        headerTintColor: '#fff',
        title: 'Author',
      }),
    },
  },
  {
    initialRouteName: 'SearchScreen',
  }
);

export default RootNavigator;
