import React from 'react';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Icon } from 'react-native-elements'
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Upcoming: UpcomingScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home';
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Upcoming') {
                    iconName = 'child-friendly';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

export default createAppContainer(TabNavigator);
