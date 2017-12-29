import React from 'react';
import { connect } from 'react-redux';
import SearchScreen from './app/components/Screens/SearchScreen';
import RepositoryScreen from './app/components/Screens/RepositoryScreen';

class Main extends React.Component {

    render() {

        // destructure props
        const { showRepos } = this.props.search;

        // check the showRepos flag in the reducer
        return showRepos ? <RepositoryScreen /> : <SearchScreen />;
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(Main);
