import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import MainScreen from "./App/Screens/MainScreen";
import SplashScreen from "react-native-splash-screen";
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainScreen />
      </SafeAreaView>
    );
  }
}
