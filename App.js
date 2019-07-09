import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import MainScreen from "./App/Screens/MainScreen";
import SplashScreen from "react-native-splash-screen";
import WelcomeScreen from "./App/Components/WelcomeScreen";
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F88F40" }}>
        <MainScreen />
        <WelcomeScreen />
      </SafeAreaView>
    );
  }
}
