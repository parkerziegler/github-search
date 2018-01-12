import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import RepositoryOwner from '../Repository/RepositoryOwner';
import RepositoryOverviewList from '../Repository/RepositoryOverviewList';
import { toggleRepos } from '../../actions/searchActions';
import getRepositoryOverview from '../../graphql/getRepositoryOverview';
import getSearch from '../../graphql/getSearch';

class RepositoryOverviewScreen extends React.Component {

    render() {

        const { data, error, navigation } = this.props;
        console.log(this.props);

        if (data.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <RepositoryOwner
                    url={data.repositoryOwner.url}
                    avatarUrl={data.repositoryOwner.avatarUrl}
                    name={data.user.name}
                    login={data.user.login}
                    height={75}
                    width={75}
                    containerStyle={null}
                    flexDirection="row"
                    infoContainerStyle={styles.infoContainer}
                    onAvatarPress={() => navigation.navigate("AuthorScreen")} />
                <RepositoryOverviewList repos={data.repositoryOwner.repositories.nodes} />
            </View>
        );
    }
}

export default compose(
    graphql(getSearch, {
        props: ({ data: { search: { input }} }) => ({
            input
        })
    }),
    graphql(getRepositoryOverview, {
        options: ({ input }) => ({
            variables: {
                login: input
            }
        })
    })
)(RepositoryOverviewScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    infoContainer: {
        display: 'flex',
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    button: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
});