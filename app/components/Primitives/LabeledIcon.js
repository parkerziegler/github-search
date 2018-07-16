import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const getIcon = (iconConfig) => {
  const { iconType, iconName, iconSize, iconColor } = iconConfig;

  switch (iconType) {
    case 'material':
      return <MaterialIcon name={iconName} size={iconSize} color={iconColor} />;
    case 'entypo':
      return <EntypoIcon name={iconName} size={iconSize} color={iconColor} />;
    case 'evil':
      return <EvilIcon name={iconName} size={iconSize} color={iconColor} />;
    case 'font-awesome':
      return (
        <FontAwesomeIcon name={iconName} size={iconSize} color={iconColor} />
      );
    default:
      return <MaterialIcon name={iconName} size={iconSize} color={iconColor} />;
  }
};

const LabeledIcon = ({ iconType, iconName, iconSize, iconColor, item }) => (
  <View style={styles.icon}>
    {getIcon({ iconType, iconName, iconSize, iconColor })}
    <Text style={styles.text}>{item}</Text>
  </View>
);

LabeledIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    fontSize: 15,
    color: '#222',
    marginLeft: 10,
  },
});

export default LabeledIcon;
