import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import firebase from "react-native-firebase";
import MainScreen from "./src/screens/MainScreen";
import styles from "./src/styles/globalStyles";

const { app } = firebase.storage();

const App = () => {
    console.disableYellowBox = true;
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <SafeAreaView style={styles.appContainer}>
            <MainScreen />
        </SafeAreaView>
    );
};
export default App;
