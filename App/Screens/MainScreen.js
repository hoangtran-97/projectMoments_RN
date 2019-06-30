import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";

class MainScreen extends Component {
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };
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
        <View style={styles.imageView}>
          <Text>This will be image View</Text>
        </View>
        <CustomButton
          buttonOnPress={this.openCamera()}
          buttonText={"Camera"}
          buttonIconName="camera-retro"
        />
      </View>
    );
  }
}

export default MainScreen;
