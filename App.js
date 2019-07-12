import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import MainScreen from "./App/Screens/MainScreen";
import SplashScreen from "react-native-splash-screen";
import WelcomeScreen from "./App/Components/WelcomeScreen";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import allReducers from "./App/Reducers/index";
const store = createStore(allReducers);
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F88F40" }}>
          <MainScreen />
          <WelcomeScreen />
        </SafeAreaView>
      </Provider>
    );
  }
}
