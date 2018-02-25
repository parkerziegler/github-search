import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const CommitHistory = ({ edges }) => (
  <FlatList
    data={edges}
    renderItem={({ item: { node: { message, oid } } }) => (
      <View key={oid}>
        <Text style={styles.commitId}>{oid.substring(0, 7)}</Text>
        <Text>{message}</Text>
      </View>
    )}
    keyExtractor={(item, index) => index}
  />
);

export default CommitHistory;

const styles = StyleSheet.create({
  commitId: {
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },
});
