import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import { trackUserSearch } from '../../actions/searchActions';

class UserSearch extends Component {

    onChangeText = searchInput => {

        const { dispatch } = this.props;

        dispatch(trackUserSearch(searchInput));
    }

    render() {

        const { search } = this.props;

        return (
            <TextInput
                style={styles.input}
                value={search.searchInput}
                onChangeText={this.onChangeText}
                placeholder="Search for a GitHub user"
                underlineColorAndroid="transparent" />
        );
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(UserSearch);

const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5 
    }
});