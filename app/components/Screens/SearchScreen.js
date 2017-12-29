import React from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, View, Image, Text, StyleSheet, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import StatusBar from '../../constants/StatusBar';
import UserSearch from '../Search/UserSearch';
import { toggleRepos } from '../../actions/searchActions';

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmitHandler = () => {

        const { dispatch } = this.props;

        // dispatch an action to signal that the search has been submitted
        dispatch(toggleRepos(true));
    }

    render() {

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
                <UserSearch />
                <Button small icon={{name: "search"}} title="Search" onPress={this.onSubmitHandler} backgroundColor="#000000" buttonStyle={styles.button} />
            </KeyboardAvoidingView>
        );
    }
}

export default connect()(SearchScreen);

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
    }
});