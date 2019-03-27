import React from "react";
import { View, YellowBox } from "react-native";
import Container from "./navigation/Routes";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const App = () => (
    <View style={{ flex: 1 }}>
      <Container/>
    </View>
);

export default App;