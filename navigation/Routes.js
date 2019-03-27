import React from "react";
import { View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AppHeader from "../components/AppHeader";
import HomeScreen from "../screens/HomeScreen";

const Routes = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Home2: {
            screen: HomeScreen
        },
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            header: props => <AppHeader {...props}/>,
            headerStyle: {
                backgroundColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",
            },
            headerTintColor: "#fff"
        }
    }
);

const Container = createAppContainer(Routes);

export default Container;