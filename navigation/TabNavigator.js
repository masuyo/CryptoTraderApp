import React from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Upcoming: UpcomingScreen
});

export default createAppContainer(TabNavigator);
