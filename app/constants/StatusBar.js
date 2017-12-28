import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'red',
    borderWidth: 1
  }
});

const StatusBar = () => <View style={styles.statusBar} />;

export default StatusBar;