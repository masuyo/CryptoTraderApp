import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from "react-redux";
import { getData, refreshData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData(1, 1);
    }

    renderItem = ({ item }) => (
        <ListItem
            style={styles.item}
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            chevron={true}
        />
    );

    handleRefresh() {
        this.props.refreshData();
        this.props.getData(1, 1);
    }

    render() {
        const { isLoading, users, refresh, page, seed } = this.props;
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
                    data={users}
                    renderItem={this.renderItem}
                    refreshing={refresh}
                    onRefresh={() => this.handleRefresh()}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => this.props.getData(page, seed)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        refresh: state.users.refresh,
        offset: state.users.offset,
        users: state.users.users,
        page: state.users.page,
        seed: state.users.seed,
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
    },
    item: {
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);