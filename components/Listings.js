import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import { connect } from "react-redux";
import { getData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    renderItem = ( { item }) => (
      <View style={styles.item}>
          <Text>id: {item.id}, symbol: {item.symbol}, name: {item.name}</Text>
      </View>
    );

    render() {
        const { isLoading, currencies } = this.props;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {

            return (
                <FlatList
                    styles={{ flex: 1 }}
                    data={currencies}
                    renderItem={this.renderItem}
                />
            );
        }
    }
}

function mapStateToProps(state) {
    let storedCurrencies = state.currencies.map(currency => ({ key: currency.id, ...currency}));
    return {
      currencies: storedCurrencies
    };
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default connect(mapStateToProps, { getData })(Listings);