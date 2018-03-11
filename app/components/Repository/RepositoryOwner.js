import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const RepositoryOwner = props => {
  const {
    avatarUrl,
    name,
    login,
    height,
    width,
    containerStyle,
    flexDirection,
    infoContainerStyle,
    onAvatarPress,
  } = props;

  return (
    <View style={[styles.container, { flexDirection }]}>
      <Avatar
        height={height}
        width={width}
        rounded
        source={{ uri: avatarUrl }}
        containerStyle={containerStyle}
        onPress={onAvatarPress}
      />
      <View style={infoContainerStyle}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.login}>{login}</Text>
      </View>
    </View>
  );
};

export default RepositoryOwner;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontSize: 22,
    fontWeight: '700',
  },
  login: {
    color: '#6C7680',
    fontSize: 18,
  },
});
