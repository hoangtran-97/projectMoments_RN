import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import MainScreen from "./src/screens/MainScreen";
import styles from "./src/styles/globalStyles";

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
