import React from "react";
import { View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AppHeader from "../components/AppHeader";
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";

const Routes = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: props => <AppHeader {...props} />
            }
        },
        Upcoming: {
            screen: UpcomingScreen,
            navigationOptions: {
                header: props => <AppHeader {...props} />
            }
        },
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
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