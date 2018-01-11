import React from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, StyleSheet, Platform, Keyboard } from 'react-native';
import StatusBar from '../../constants/StatusBar';
import { Button } from 'react-native-elements';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const TRACK_SEARCH = gql`
    mutation trackSearch($search: String!) {
        trackSearch(search: $search) @client
    }
`

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmitHandler = () => {

        const { trackSearch, navigation } = this.props;

        trackSearch();

        // dismiss the keyboard and navigate to the next screen
        Keyboard.dismiss();
        navigation.navigate("RepositoryOverviewScreen");
    }

    render() {

        console.log(this.props);
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <StatusBar />
                <View style={styles.titleContainer}>
                    <Image
                        style={{ width: 100, height: 40 }}
                        source={require('../../../assets/GitHub_Logo.png')} />
                    <Text style={styles.title}>Search</Text>
                </View>
                <Image
                    style={{ width: 100, height: 100, marginBottom: 20 }}
                    source={require('../../../assets/GitHub-Mark-120px-plus.png')}/>
                <TextInput
                    style={styles.input}
                    ref={input => this.input = input}
                    placeholder="Search for a GitHub user"
                    underlineColorAndroid="transparent" />
                <Button small icon={{name: "search"}} title="Search" onPress={this.onSubmitHandler} backgroundColor="#000000" buttonStyle={styles.button} />
            </KeyboardAvoidingView>
        );
    }
}

export default graphql(TRACK_SEARCH, {
    props: ({ ownProps: { navigation }, mutate }) => ({
        navigation,
        trackSearch: search => mutate({ variables: { search } }),
    })
})(SearchScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 28,
        fontFamily: (Platform.OS === 'ios') ? "Avenir Next" : "Roboto"
    },
    button: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5 
    }
});