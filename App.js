import React from "react";
import {View} from "react-native";
import Container from './navigation/TabNavigator';
//import Container from "./navigation/Routes";

export default class App extends  React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container />
            </View>
        );
    }
}