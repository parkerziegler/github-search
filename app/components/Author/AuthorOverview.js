import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LabeledIcon from '../Helpers/LabeledIcon';

export default class AuthorOverview extends React.Component {

    render() {

        const { company, location, url, followerCount, websiteUrl, repoCount } = this.props;

        const data = [
            { iconType: 'material', iconName: 'group', item: company },
            { iconType: 'entypo', iconName: 'link', item: websiteUrl },
            { iconType: 'evil', iconName: 'location', item: location },
            { iconType: 'entypo', iconName: 'github', item: `${followerCount} followers`},
            { iconType: 'entypo', iconName: 'log-out', item: `${repoCount} repositories`}
        ];

        return (
            <View style={styles.container}>
                {data.map((item, index) => <LabeledIcon {...item} iconSize={40} key={index} />)}    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    }
});

