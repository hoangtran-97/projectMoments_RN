import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import MainScreen from "./App/Screens/MainScreen";
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainScreen />
      </SafeAreaView>
    );
  }
}
