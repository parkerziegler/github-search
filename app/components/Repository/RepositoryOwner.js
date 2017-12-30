import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { WebBrowser } from 'expo';

const RepositoryOwner = (props) => {

    const { url, avatarUrl, name, login, navigation } = props;

    const handleAvatarPress = () => {

        // await WebBrowser.openBrowserAsync(url);
        navigation.navigate('AuthorScreen');
    };

    return (
        <View style={styles.container}>
            <Avatar
                large
                rounded
                source={{ uri: avatarUrl }}
                onPress={handleAvatarPress} />
            <View style={styles.infoContainer}>
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        display: 'flex',
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    name: {
        color: '#000',
        fontSize: 22,
        fontWeight: '700'
    },
    login: {
        color: '#6C7680',
        fontSize: 18
    }
});