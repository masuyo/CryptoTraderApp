import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';

export default class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: {},
        }
    }

    componentDidMount() {
        const apiUrl = "https://api.alternative.me/v2/listings/";

        fetch(apiUrl)
            .then ( response => response.json() )
            .then ( responseJson => {
                //console.log(responseJson);
                this.setState({
                    isLoading: false,
                    items: responseJson,
                })

            }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        const { isLoading, items } = this.state;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>
            );
        } else {

            let currencies = items.data.map(item => {
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