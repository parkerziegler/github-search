import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { graphql, compose } from 'react-apollo';
import getSearch from '../../graphql/getSearch';
import getRepositoryName from '../../graphql/getRepositoryName';
import getRepositoryDetail from '../../graphql/getRepositoryDetail';
import LabeledIcon from '../Helpers/LabeledIcon';

const RepositoryDetailScreen = (props) => {

    const { loading, repository, error } = props;

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    console.log(repository);

    return (
        <View style={styles.container}>
            <Text style={styles.repoName}>{repository.name}</Text>
            <Text style={styles.description}>{repository.description}</Text>
            <View style={styles.iconContainer}>
                <LabeledIcon
                    iconName="star"
                    iconType="font-awesome"
                    iconSize={30}
                    item={`${repository.stargazers.totalCount} stars`}
                />
                <LabeledIcon
                    iconName="code-fork"
                    iconType="font-awesome"
                    iconSize={30}
                    item={`${repository.forks.totalCount} forks`}
                />
            </View>
            <Text style={styles.repoName}>History</Text>
            <View style={styles.commitContainer}>
                {repository.ref.target.history.edges.map(({ node: { message, oid } }) => <Text key={oid}>{message}</Text>)}
            </View>
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
        }),
        props: ({ data: { loading, repository, error } }) => ({
            loading,
            repository,
            error
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
    },
    repoName: {
        color: '#000',
        fontSize: 25,
        fontWeight: '700'
    },
    description: {
        color: '#6C7680',
        fontSize: 18
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    commitContainer: {
        display: 'flex'
    }
});
