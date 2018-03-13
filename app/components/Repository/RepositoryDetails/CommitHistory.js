import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { WebBrowser } from 'expo';

const handleOpenCommit = async commitUrl => {
  await WebBrowser.openBrowserAsync(commitUrl);
};

const TouchableComponent = ({ children, commitUrl }) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={() => handleOpenCommit(commitUrl)}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={() => handleOpenCommit(commitUrl)}>
      {children}
    </TouchableNativeFeedback>
  );

const CommitHistory = ({ edges }) => (
  <FlatList
    style={{ alignSelf: 'stretch' }}
    data={edges}
    renderItem={({ item: { node: { message, oid, commitUrl } } }) => (
      <TouchableComponent commitUrl={commitUrl}>
        <View key={oid}>
          <Text style={styles.commitId}>{oid.substring(0, 7)}</Text>
          <Text>{message}</Text>
        </View>
      </TouchableComponent>
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
