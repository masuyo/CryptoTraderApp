import React from 'react';
import {StyleSheet} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import Listings from "../components/Listings";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Listings/>
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