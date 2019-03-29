import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements'
import HomeScreen from "../screens/HomeScreen";
import UpcomingScreen from "../screens/UpcomingScreen";
import AppHeader from "../components/AppHeader";

const HeaderColor = '#71b9c4';
const ActiveTintColor = 'tomato';
const InactiveTintColor = 'gray';

const CustomStackNavigator = screen => {
    return (
        createStackNavigator({
            Root: {
                screen: screen,
            },
        }, {
            defaultNavigationOptions: {
                header: props => <AppHeader {...props} />,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: HeaderColor,
                },
            },
        })
    )
};

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: CustomStackNavigator(HomeScreen),
    },
    Upcoming: {
        screen: CustomStackNavigator(UpcomingScreen),
    }
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
            activeTintColor: ActiveTintColor,
            inactiveTintColor: InactiveTintColor,
        },
    });

export default createAppContainer(TabNavigator);
