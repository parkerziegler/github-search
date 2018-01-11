import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class AuthorItem extends React.Component {

    getIcon = (iconType, iconName) => {

        const props = {
            name: iconName,
            size: 40,
            color: "#222"
        };

        switch (iconType) {
            case 'material':
                return <MaterialIcon {...props} />;
            case 'entypo':
                return <EntypoIcon {...props} />;
            case 'evil':
                return <EvilIcon {...props} />;
            default:
                return <MaterialIcon {...props} />;
        }
    }

    render() {

        const { iconType, iconName, item } = this.props;

        return (
            <View style={styles.itemContainer}>
                {this.getIcon(iconType, iconName)}
                <Text style={styles.text}>{item}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    text: {
        fontSize: 15,
        color:'#000',
        marginLeft: 10
    }
});