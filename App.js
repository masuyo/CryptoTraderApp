import React from "react";
import {View} from "react-native";
//import Container from "./navigation/Routes";
import TabNavigator from "./navigation/TabNavigator"

export default class App extends  React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator />
            </View>
        );
    }
}