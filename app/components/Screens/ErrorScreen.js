import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ErrorScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <Text>🤔 Oops, we couldn&apos;t find that person! 🤔</Text>
      <Button
        title="Return to Search"
        onPress={onPress}
        icon={{ name: 'chevron-left' }}
        backgroundColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorScreen;
