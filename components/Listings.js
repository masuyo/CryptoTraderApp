import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button} from 'react-native';
import { connect } from "react-redux";
import { getData, refreshData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData(0);
    }

    renderItem = ({ item }) => (
      <View style={styles.item}>
          <Text>id: {item.id}, symbol: {item.symbol}, name: {item.name}</Text>
      </View>
    );

    handleRefresh() {
        this.props.refreshData();
        this.props.getData(0);
    }

    render() {
        console.log("REFRESH: ", this.props.refresh);
        const { isLoading, currencies, refresh, offset } = this.props;
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
                    onPress={() => this.handleRefresh()}
                />
                <FlatList
                    styles={{ flex: 1 }}
                    data={currencies}
                    renderItem={this.renderItem}
                    refreshing={refresh}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => this.props.getData(offset)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    const storedCurrencies = state.currency.currencies.map(currency => ({ ...currency}));
    return {
        refresh: state.currency.refresh,
        offset: state.currency.offset,
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