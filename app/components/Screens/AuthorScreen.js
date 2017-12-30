import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthorScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text>Hello world!</Text>
        </View>
    );
};

export default AuthorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
});