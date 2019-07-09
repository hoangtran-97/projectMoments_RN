import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput
} from "react-native";
import colors from "../Styles/colors";
import LottieView from "lottie-react-native";
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      showAnimated: false
    };
  }
  onChangeNote = async note => {
    await timeout(3000);
    this.setState({
      note: note
    });
    await timeout(3000);
    this.setState({
      showAnimated: true
    });
  };
  render() {
    return (
      <Modal animationType="slide" transparent={false} visible={true}>
        <SafeAreaView
          style={{
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
            backgroundColor: colors.Orange
          }}
        >
          <View>
            <Text>Welcome to Moments</Text>
          </View>
          <View>
            <TextInput
              textAlign={"center"}
              placeholder="Please enter your name"
              placeholderTextColor={colors.CameraBlack}
              numberOfLines={1}
              onChangeText={note => this.onChangeNote(note)}
              style={{
                height: 80,
                width: 180
              }}
            />
          </View>
          <View style={{ height: 40 }}>
            {this.state.note.length != 0 ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 40
                }}
              >
                <Text style={{ marginVertical: 40 }}>
                  Hello {this.state.note}
                </Text>
                {this.state.showAnimated ? (
                  <LottieView
                    style={{ width: 180, height: 180 }}
                    source={require("../assets/present.json")}
                    autoPlay
                    loop
                  />
                ) : (
                  <View style={{ height: 180 }} />
                )}
              </View>
            ) : (
              <View style={{ height: 40 }} />
            )}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}
export default WelcomeScreen;
