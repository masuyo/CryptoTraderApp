import React from "react";
import {Header} from "react-navigation";
import {View} from "react-native";

const AppHeader = props => {
    return (
        <View>
            <Header {...props} />
        </View>
    );
};

export default AppHeader;