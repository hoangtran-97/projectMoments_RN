import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../Styles/colors";
import LottieView from "lottie-react-native";
class CamButtonAnimated extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.buttonOnPress}>
        <LottieView
          style={{ width: 100, height: 100 }}
          source={require("../Assets/cam_shot1.json")}
          ref={this.props.onCamPresses}
        />
      </TouchableOpacity>
    );
  }
}
export default CamButtonAnimated;
