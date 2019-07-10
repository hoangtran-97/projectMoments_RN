import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
  ScrollView
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
            flex: 1,
            backgroundColor: colors.Orange
          }}
        >
          <ScrollView scrollEnabled={false}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%"
              }}
            >
              <Text>Welcome to Moments</Text>
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    );
  }
}
export default WelcomeScreen;
