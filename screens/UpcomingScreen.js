import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tabs from "../navigation/TabNavigator";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Upcoming',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hi, upcoming stuff will be here!</Text>
                <Tabs />
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