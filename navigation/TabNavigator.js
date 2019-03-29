import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";
import AppHeader from "../components/AppHeader";

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

                } else if (routeName === 'Upcoming') {
                    iconName = 'child-friendly';
                }

                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

const Navigation = createStackNavigator({
    Root: { screen: TabNavigator},
}, {
    defaultNavigationOptions: {
        header: props => <AppHeader {...props} />,
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#000',
            color: 'blue'
        },
    },
    navigationOptions: {
        tabBarLabel: 'Home!',
    },
});

export default createAppContainer(Navigation);
