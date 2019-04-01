import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class UpcomingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Upcoming',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi, upcoming stuff will be here!</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1
    }
});