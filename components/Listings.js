import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button} from 'react-native';
import { connect } from "react-redux";
import { getData, refreshData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    renderItem = ({ item }) => (
      <View style={styles.item}>
          <Text>id: {item.id}, symbol: {item.symbol}, name: {item.name}</Text>
      </View>
    );

    render() {
        console.log("REFRESH: ", this.props.refresh);
        const { isLoading, currencies, refresh } = this.props;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Button
                    title="Refresh"
                    onPress={() => this.props.refreshData()}
                />
                <FlatList
                    styles={{ flex: 1 }}
                    data={currencies}
                    renderItem={this.renderItem}
                    refreshing={refresh}
                    onRefresh={() => this.props.getData()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    let storedCurrencies = state.currency.currencies.map(currency => ({key: currency.id.toString(), ...currency}));
    //let obj = state.currency.currencies;
    console.log("object",state.currency.currencies);

    return {
        refresh: state.currency.refresh,
        currencies: storedCurrencies,
    };
}

const mapDispatchToProps = {
    getData,
    refreshData
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);