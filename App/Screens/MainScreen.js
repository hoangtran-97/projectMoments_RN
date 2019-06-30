import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import styles from "../Styles/styles";
class MainScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View style={styles.welcomeContainer}>
          <Text>Welcome to project Moments</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "skyblue",
            flex: 3,
            justifyContent: "center"
          }}
        >
          <Text>This will be image View</Text>
        </View>
        <Button style={{ flex: 1 }} title="Capture the moment" color="green" />
      </View>
    );
  }
}

export default MainScreen;
