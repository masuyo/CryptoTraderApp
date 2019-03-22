import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    const headers = {
      'Content-Type': 'application/json',
      'X-Access-Token':'3D2ADF61-84D2-42A2-A715-A207B67A8CD8'
    }
    const apiUrl = 'https://obudai-api.azurewebsites.net/api/account/history';
    // fetch uses get method
    return fetch(apiUrl, headers)
      .then ( (response) => response.json() )
      .then ( (responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.status,
        })

      })

    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    } else {
      let status = this.state.dataSource;
        <View style={styles.container}>
        <ActivityIndicator/>
      </View>
      })

      return (
        <View style={styles.container}>
          <Text>Content Loaded!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
