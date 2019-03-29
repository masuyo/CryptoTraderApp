import React from "react";
import { Header } from "react-navigation";
import { View } from "react-native";

const AppHeader = props => {
    return (
        <View
            style={{
                height: 70,
            }}
        >
            <Header {...props} />
        </View>
    );
};

export default AppHeader;