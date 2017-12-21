import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, Platform, Image } from 'react-native';
import UserSearch from './app/components/Search/UserSearch';
import RepositoryList from './app/components/Repository/RepositoryList';
import { token } from './config';
import { flagLoading, getRepos, getAvatar } from './app/actions/searchActions';

class Main extends React.Component {

    state = {
        showResults: false
    }

    onSubmitHandler = () => {

        this.setState({
            showResults: true
        }); 
    }

    onBackHandler = () => {

        this.setState({
            showResults: false
        });
    }

    render() {

        // destructure props and state
        const { searchInput } = this.props.search;
        const { showResults } = this.state;

        const search = <View style={styles.container}>
                <View style={styles.statusBarBackground}></View>
                <View style={styles.titleContainer}>
                    <Image
                        style={{ width: 100, height: 40 }}
                        source={require('./assets/GitHub_Logo.png')} />
                    <Text style={styles.title}>Search</Text>
                </View>
                <Image
                    style={{ width: 100, height: 100, marginBottom: 20 }}
                    source={require('./assets/GitHub-Mark-120px-plus.png')}/>
                <UserSearch />
                <Button title="Search" onPress={this.onSubmitHandler}/>
                {/*{!loading && avatar
                ? <Image
                    style={{width: 50, height: 50}}
                    source={{ uri: avatar }}/>
                : null}}*/}
            </View>;

        const results = <View style={styles.container}>
                <View style={styles.statusBarBackground}></View>
                <RepositoryList />
                <Button title="Back" onPress={this.onBackHandler}/>
            </View>;

        return showResults ? results : search;
    }
}

const mapStateToProps = (state) => {

    return {
        search: state.searchReducer
    };
};

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 20 : 0,
        backgroundColor: "white",
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 28,
        fontFamily: (Platform.OS === 'ios') ? "Avenir Next" : "Roboto"
    }
});