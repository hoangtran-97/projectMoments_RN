import React, { Component } from "react";
import { Text, View, Button, CameraRoll } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import styles from "../Styles/styles";
import CustomButton from "../Components/CustomButton";
import moment from "moment";
import CamButtonAnimated from "../Components/CamButtonAnimated";
import ImageView from "../Components/ImageView";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as updateIndexAction from "../Actions/updateIndexAction";
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          link:
            "https://media1.tenor.com/images/452cea6cc5abcfbac66d1b62a18bacf5/tenor.gif?itemid=8474302",
          time: "July 15th 2019"
        },
        {
          link:
            "https://media1.tenor.com/images/21ebb8eb5b0485778d4e8d53662f64bb/tenor.gif?itemid=9272794"
        },
        {
          link: "https://i.imgur.com/gpgjBPh.jpg",
          time: "December 21st 2018, 20:28 pm"
        },
        {
          link: "https://i.imgur.com/uzqxLku.jpg",
          time: "Febuary 10th 2019, 12:09 pm"
        },
        {
          link: "https://i.imgur.com/TId5QpJ.jpg",
          time: "Febuary 13rd 2019, 09:56 am"
        },
        {
          link: "https://i.imgur.com/KuwYCYs.jpg",
          time: "Febuary 14nd 2019, 14:57 pm"
        },
        {
          link: "https://i.imgur.com/2pgHMbL.jpg",
          time: "Febuary 14nd 2019, 16:29 pm"
        },
        {
          link: "https://i.imgur.com/X42ZEV4.jpg",
          time: "Febuary 14nd 2019, 23:29 pm"
        }
      ]
    };
    this.onCamPresses = this.onCamPresses.bind(this);
  }
  async componentWillMount() {}
  openCamera = () => {
    ImagePicker.openCamera({}).then(image => {
      CameraRoll.saveToCameraRoll(image.path);
      d = new Date();
      newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
      this.setState({
        data: [...this.state.data, { link: image.path, time: newTime }]
      });
      index = this.props.index;
      if (index == 0) {
        newProgress = this.props.index / this.state.data.length;
      } else {
        index++;
        newProgress = this.props.index / this.state.data.length;
      }
      this.props.actions.updateProgress(newProgress);
    });
  };
  onCamPresses = async () => {
    //Play animation
    //this.animation.play();
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageView}>
          <ImageView dataFromMain={this.state.data} />
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
function mapStateToProps(state) {
  return {
    progress: state.updateIndexReducer.progress,
    index: state.updateIndexReducer.currentIndex
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, updateIndexAction), dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
