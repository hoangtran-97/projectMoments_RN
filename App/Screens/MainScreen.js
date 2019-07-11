import React, { Component } from "react";
import { Text, View, Button, CameraRoll } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import moment from "moment";
import CamButtonAnimated from "../Components/CamButtonAnimated";
import ImageView from "../Components/ImageView";
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.onCamPresses = this.onCamPresses.bind(this);
  }
  async componentWillMount() {
    d = new Date();
    newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
    this.setState({
      time: newTime
    });
  }
  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      CameraRoll.saveToCameraRoll(image.path);
    });
  };
  onCamPresses = async () => {
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.mainContainer}>
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
