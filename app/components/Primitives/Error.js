import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import ScreenView from './ScreenView';

const Error = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <ScreenView style={styles.container}>
      <Text style={[styles.text, { fontSize: 40 }]}>🤔</Text>
      <Text style={[styles.text, { fontSize: 18 }]}>
        We couldn&apos;t find that person.
      </Text>
      <Button
        title="Return to Search"
        onPress={onPress}
        backgroundColor="#222"
      />
    </ScreenView>
  );
};

Error.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: '#222',
    textAlign: 'center',
  },
});

export default Error;
