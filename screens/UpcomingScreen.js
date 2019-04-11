import React from 'react';
import {StyleSheet, View} from 'react-native';
import TouchableCounter from "../components/TouchableCounter";

export default class UpcomingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableCounter />
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