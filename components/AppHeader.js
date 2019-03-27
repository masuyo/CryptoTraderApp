import React from "react";
import { Header } from "react-navigation";
import { View, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const AppHeader = props => {
    return (
        <View
            style={{
                height: 56,
                marginTop: 20
            }}
        >
            <LinearGradient
                colors={["#6200EE", "#3700B3"]}
            >
                <Header {...props} />
            </LinearGradient>
        </View>
    );
};

export default AppHeader;