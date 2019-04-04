import React from "react";
import {Header} from "react-navigation";
import {View} from "react-native";

export default props => {
    return (
        <View>
            <Header {...props} />
        </View>
    );
};
