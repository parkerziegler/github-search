import { StackNavigator } from 'react-navigation';
import SearchScreen from '../Screens/SearchScreen';
import RepositoryOverviewScreen from '../Screens/RepositoryOverviewScreen';
import AuthorScreen from '../Screens/AuthorScreen';
import RepositoryDetailScreen from '../Screens/RepositoryDetailScreen';

const headerStyle = {
  backgroundColor: '#222',
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
      navigationOptions: ({ navigation }) => ({
        headerStyle,
        headerTintColor: '#fff',
        title: `${navigation.state.params.username}`,
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
      navigationOptions: ({ navigation }) => ({
        headerStyle,
        headerTintColor: '#fff',
        title: `${navigation.state.params.repositoryName}`,
      }),
    },
  },
  {
    initialRouteName: 'SearchScreen',
  }
);

export default RootNavigator;
