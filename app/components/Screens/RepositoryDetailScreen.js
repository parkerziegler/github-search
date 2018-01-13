import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql, compose } from 'react-apollo';
import getSearch from '../../graphql/getSearch';
import getRepositoryName from '../../graphql/getRepositoryName';
import getRepositoryDetail from '../../graphql/getRepositoryDetail';

const RepositoryDetailScreen = (props) => {

    console.log(props);

    if (props.data.loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>{props.data.repository.description}</Text>
            <Text>Me</Text>
        </View>
    );

}

export default compose(
    graphql(getSearch, {
        props: ({ data: { search: { input }} }) => ({
            input
        })
    }),
    graphql(getRepositoryName, {
        props: ({ data: { repositoryName: { name } } }) => ({
            name
        })
    }),
    graphql(getRepositoryDetail, {
        options: ({ input, name }) => ({
            variables: {
                owner: input,
                name
            }
        })
    })
)(RepositoryDetailScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
});
