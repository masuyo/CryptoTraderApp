import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import { connect } from "react-redux";
import { getData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {

            let currencies = this.props.currencies.map(item => {
                if(item.id < 5000) {
                    return (<View key={item.id} style={styles.item}>
                        <Text>id: {item.id}, symbol: {item.symbol}, name: {item.name}</Text>
                    </View>)
                }
            });

            return (
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {currencies}
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
      currencies: state.currencies
    };
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

export default connect(mapStateToProps, { getData })(Listings);