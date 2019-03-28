import React from "react";
import { Header } from "react-navigation";
import { View } from "react-native";

const AppHeader = props => {
    return (
        <View
            style={{
                height: 50,
                marginTop: 0
            }}
        >
            <Header {...props} />
        </View>
    );
};

export default AppHeader;