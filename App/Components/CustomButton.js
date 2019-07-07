import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../Styles/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "../Styles/styles";
class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.buttonOnPress}>
        <View style={styles.buttonStyle}>
          <FontAwesome5
            name={this.props.buttonIconName}
            color={colors.CameraBlack}
            size={20}
          />
          <Text style={styles.textStyle}>{this.props.buttonText}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
