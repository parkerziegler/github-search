import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import LabeledIcon from '../Primitives/LabeledIcon';

export default class AuthorOverview extends React.Component {
  render() {
    const {
      company,
      location,
      followerCount,
      websiteUrl,
      repoCount,
      organizations,
    } = this.props;

    const data = [
      { iconType: 'material', iconName: 'group', item: company },
      { iconType: 'entypo', iconName: 'link', item: websiteUrl },
      { iconType: 'evil', iconName: 'location', item: location },
      {
        iconType: 'entypo',
        iconName: 'github',
        item: `${followerCount} followers`,
      },
      {
        iconType: 'entypo',
        iconName: 'log-out',
        item: `${repoCount} repositories`,
      },
    ];

    return (
      <View style={styles.container}>
        {data.map(
          (item, index) =>
            item.item && (
              <LabeledIcon {...item} iconSize={30} color={'#222'} key={index} />
            )
        )}
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {organizations.map(({ node: { avatarUrl, name } }) => (
            <Avatar
              key={name}
              height={50}
              width={50}
              source={{ uri: avatarUrl }}
              containerStyle={{
                margin: 10,
              }}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
