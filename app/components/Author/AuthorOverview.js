import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import StatusBar from '../../constants/StatusBar';

export default class AuthorOverview extends React.Component {

    static commonProps = {
        size: 50,
        color: "#6c7780"
    };

    render() {

        const { company, location, url, followerCount, websiteUrl, repoCount } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <MaterialIcon name={"group"} size={30} color={"#6c7680"} />
                    <Text style={styles.text}>{company}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <EntypoIcon name={"link"} size={30} color={"#6c7680"} />
                    <Text style={styles.text}>{websiteUrl}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <EvilIcon name={"location"} size={30} color={"#6c7680"}/>
                    <Text style={styles.text}>{location}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <EntypoIcon name={"github"} size={30} color={"#6c7680"}/>
                    <Text style={styles.text}>{followerCount} followers</Text>
                </View>  
                <View style={styles.itemContainer}>
                    <EntypoIcon name={"log-out"} size={30} color={"#6c7680"}/>
                    <Text style={styles.text}>{repoCount} repositories</Text>
                </View>      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color:'#000',
        marginLeft: 10
    }
});

