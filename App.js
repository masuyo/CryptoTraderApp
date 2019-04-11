import React from "react";
import {View} from "react-native";
import Container from './navigation/TabNavigator';
import {Provider} from 'react-redux'
import store from './store/RootStore'

const App = () => {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Container />
            </View>
        </Provider>
    );
};

export default App;