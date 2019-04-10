import React from "react";
import {View} from "react-native";
import Container from './navigation/TabNavigator';
import {Provider} from 'react-redux'
import store from './store/RootStore'
import Listings from "./components/Listings";

export default class App extends  React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                        <Listings/>
                </View>
            </Provider>
        );
    }
}