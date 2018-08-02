import React from 'react';
import PropTypes from 'prop-types';
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

const handleOpenCommit = async (commitUrl) => {
  await WebBrowser.openBrowserAsync(commitUrl);
};

export const TouchableCommit = ({ children, commitUrl }) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={() => handleOpenCommit(commitUrl)}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={() => handleOpenCommit(commitUrl)}>
      {children}
    </TouchableNativeFeedback>
  );

TouchableCommit.propTypes = {
  commitUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const CommitHistory = ({ edges }) => (
  <FlatList
    style={{ alignSelf: 'stretch' }}
    data={edges}
    renderItem={({
      item: {
        node: { message, oid, commitUrl },
      },
    }) => (
      <TouchableCommit commitUrl={commitUrl}>
        <View key={oid}>
          <Text style={styles.commitId}>{oid.substring(0, 7)}</Text>
          <Text>{message}</Text>
        </View>
      </TouchableCommit>
    )}
    keyExtractor={(item) => item.node.oid}
  />
);

CommitHistory.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: {
        message: PropTypes.string,
        oid: PropTypes.string,
        commitUrl: PropTypes.string,
      },
    })
  ),
};

export default CommitHistory;

const styles = StyleSheet.create({
  commitId: {
    textDecorationLine: 'underline',
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },
});
