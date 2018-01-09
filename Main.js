import React from 'react';
import { connect } from 'react-redux';
import SearchScreen from './app/components/Screens/SearchScreen';
import RepositoryScreen from './app/components/Screens/RepositoryScreen';
import RepositoryOwnerNavigator from './app/components/Navigation/RepositoryOwnerNavigator';

class Main extends React.Component {

    render() {

        return <RepositoryOwnerNavigator />;
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(Main);
