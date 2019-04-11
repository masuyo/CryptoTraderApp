import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { increaseCounter, decreaseCounter } from "../store/Actions";

class TouchableCounter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.counter
});

const mapDispatchToProps = {
    increaseCounter,
    decreaseCounter
};

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

export default connect(mapStateToProps, mapDispatchToProps)(TouchableCounter);