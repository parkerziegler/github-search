import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

const StatusBar = () => <View style={styles.statusBar} />;

export default StatusBar;
