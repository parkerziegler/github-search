import React from 'react';
import { Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { WebBrowser } from 'expo';

const RepositoryOwner = (props) => {

    const { url, avatarUrl } = props;

    const handleAvatarPress = async () => {

        await WebBrowser.openBrowserAsync(url);
    };

    return (
        <Avatar
            large
            rounded
            source={{ uri: avatarUrl }}
            onPress={handleAvatarPress} />
    );
};

export default RepositoryOwner;