import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class TouchableCounter extends React.Component {
    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1})
    };

    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1})
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

export default connect(mapStateToProps)(TouchableCounter);

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