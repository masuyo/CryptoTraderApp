import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import AppHeader from "../components/AppHeader";
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";

// creates a React component
const Routes = createStackNavigator(
    {
        Home: HomeScreen,
        Upcoming: UpcomingScreen
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
                borderWidth: 1,
                borderBottomColor: 'white'
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