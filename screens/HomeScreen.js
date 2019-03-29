import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Listings from "../components/Listings";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                    title="Go to Upcoming"
                    onPress={() => this.props.navigation.navigate('Upcoming')}/>
                <Listings/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1
    }
});