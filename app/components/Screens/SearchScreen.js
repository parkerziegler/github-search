import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';
import StatusBar from '../../constants/StatusBar';
import { Button } from 'react-native-elements';
import { graphql, compose } from 'react-apollo';
import getSearch from '../../graphql/getSearch';
import trackSearch from '../../graphql/trackSearch';

class SearchScreen extends React.Component {
  onSubmitHandler = () => {
    const { navigation } = this.props;

    // dismiss the keyboard and navigate to the next screen
    Keyboard.dismiss();
    navigation.navigate('RepositoryOverviewScreen');
  };

  onChangeText = text => {
    const { handleChange } = this.props;
    handleChange(text);
  };

  render() {
    const { input } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar />
        <View style={styles.titleContainer}>
          <Image
            style={{ width: 100, height: 40 }}
            source={require('../../../assets/GitHub_Logo.png')}
          />
          <Text style={styles.title}>Search</Text>
        </View>
        <Image
          style={{ width: 100, height: 100, marginBottom: 20 }}
          source={require('../../../assets/GitHub-Mark-120px-plus.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
          value={input}
          placeholder="Search for a GitHub user"
          underlineColorAndroid="transparent"
        />
        <Button
          small
          icon={{ name: 'search' }}
          title="Search"
          onPress={this.onSubmitHandler}
          backgroundColor="#000000"
          buttonStyle={styles.button}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default compose(
  graphql(getSearch, {
    props: ({ data: { search: { input } } }) => ({
      input,
    }),
  }),
  graphql(trackSearch, {
    props: ({ mutate }) => ({
      handleChange: input => mutate({ variables: { input } }),
    }),
  })
)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 28,
    fontFamily: Platform.OS === 'ios' ? 'Avenir Next' : 'Roboto',
  },
  button: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
  },
});
