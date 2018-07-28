import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const RepositoryOwner = ({
  avatarUrl,
  name,
  login,
  height,
  width,
  containerStyle,
  flexDirection,
  infoContainerStyle,
  onAvatarPress,
}) => (
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

RepositoryOwner.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  flexDirection: PropTypes.oneOf(['row', 'column']),
  infoContainerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  onAvatarPress: PropTypes.func.isRequired,
};

RepositoryOwner.defaultProps = {
  containerStyle: {},
  height: 100,
  width: 100,
  flexDirection: 'column',
  infoContainerStyle: {},
};

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

export default RepositoryOwner;
