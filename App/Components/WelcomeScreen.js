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
          <View style={{ alignItems: "center" }}>
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
          {this.state.note.length != 0 ? (
            <View>
              <Text>Hello {this.state.note}</Text>
            </View>
          ) : null}
          {this.state.showAnimated ? <Text>Animated</Text> : null}
        </SafeAreaView>
      </Modal>
    );
  }
}
export default WelcomeScreen;
