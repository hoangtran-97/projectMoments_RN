import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import CamButtonAnimated from "../Components/CamButtonAnimated";
import ImageView from "../Components/ImageView";
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.onCamPresses = this.onCamPresses.bind(this);
  }
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };
  onCamPresses = async () => {
    this.animation.play();
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
          <ImageView />
        </View>
        <View style={styles.camButton}>
          <CamButtonAnimated
            buttonOnPress={() => {
              this.openCamera();
              this.onCamPresses();
            }}
            onCamPresses={animation => {
              this.animation = animation;
            }}
          />
        </View>
      </View>
    );
  }
}

export default MainScreen;
