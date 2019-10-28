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
import SplashScreen from "react-native-splash-screen";
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      showAnimated: false,
      showWelcomeScreen: true
    };
  }
  async componentDidMount() {
    await timeout(2000);
    SplashScreen.hide();
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
  onPresentPressed = async () => {
    this.animation.play();
    await timeout(3000);
    this.setState({ showWelcomeScreen: false });
  };
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.showWelcomeScreen}
      >
        <ScrollView scrollEnabled={false}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100%",
              backgroundColor: colors.Orange
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Welcome to Moments
            </Text>
            <TextInput
              textAlign={"center"}
              placeholder="Just put 'Veoo' here hon"
              placeholderTextColor={colors.CameraBlack}
              numberOfLines={1}
              onChangeText={note => this.onChangeNote(note)}
              style={{
                height: 80,
                width: 180,
                fontStyle: "italic"
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
                  <Text style={{ marginVertical: 40 }}>Heyyyy Honnnn!</Text>
                  <Text style={{ marginHorizontal: 40 }}>
                    Remember last year when you asked can i make an app for you?
                    Well this is it! Press on your present hon!
                  </Text>
                  {this.state.showAnimated ? (
                    <TouchableOpacity
                      style={{ width: 180, height: 180 }}
                      onPress={() => {
                        this.onPresentPressed();
                      }}
                    >
                      <LottieView
                        style={{ width: 180, height: 180 }}
                        source={require("../Assets/present_open.json")}
                        ref={animation => {
                          this.animation = animation;
                        }}
                      />
                    </TouchableOpacity>
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
      </Modal>
    );
  }
}
export default WelcomeScreen;
