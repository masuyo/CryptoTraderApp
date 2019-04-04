import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class TouchableCounter extends React.Component {
    state = {
        counter: 0,
    };

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
    };

    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1})
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <Text>{this.state.counter}</Text>
                <TouchableOpacity onPress={()=>this.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
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