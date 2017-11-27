import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class UserSearch extends Component {

    render() {
        const { onChangeText, searchInput } = this.props;

        return (
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                value={searchInput}
                onChangeText={text => onChangeText(text)}
                placeholder="Search for a GitHub user" />
        );
    }
}