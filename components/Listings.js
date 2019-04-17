import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from "react-redux";
import { getData, refreshData } from "../store/Actions";

class Listings extends React.Component {
    componentDidMount() {
        this.props.getData(0);
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
        console.log("REFRESH: ", this.props.refresh);
        const { isLoading, users, refresh } = this.props;
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                    <FlatList
                        styles={{ flex: 1 }}
                        data={users}
                        renderItem={this.renderItem}
                        refreshing={refresh}
                        onRefresh={() => this.handleRefresh()}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => this.props.getData(1,1)}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
}

function mapStateToProps(state) {
    const storedUsers = state.users.users.map(user => ({ ...user}));
    console.log("stored", storedUsers.length);
    return {
        refresh: state.users.refresh,
        offset: state.users.offset,
        users: storedUsers,
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
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);