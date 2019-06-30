import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
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
            backgroundColor: "#4A4B4A",
            flex: 3,
            justifyContent: "center"
          }}
        >
          <Text>This will be image View</Text>
        </View>
        <Button
          style={{ flex: 1 }}
          title="Camera"
          color="green"
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true
            }).then(image => {
              console.log(image);
            });
          }}
        />
      </View>
    );
  }
}

export default MainScreen;
