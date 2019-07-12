import React, { Component } from "react";
import { Text, View, Dimensions, Image, ProgressViewIOS } from "react-native";
import Carousel from "react-native-snap-carousel";
import colors from "../Styles/colors";
import styles from "../Styles/styles";
import moment from "moment";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as updateIndexAction from "../Actions/updateIndexAction";
const sliderWidth = Dimensions.get("window").width;
class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      time: ""
    };
  }
  renderItem({ item }) {
    return (
      <View style={styles.carouselView}>
        <Image
          style={{
            width: "100%",
            height: "100%"
          }}
          source={{
            uri: item.link
          }}
          resizeMode="cover"
        />
      </View>
    );
  }
  updateProgress(index) {
    this.props.actions.updateIndex(index);
    if (index == 0) {
      newProgress = index / this.props.dataFromMain.length;
    } else {
      index++;
      newProgress = index / this.props.dataFromMain.length;
    }
    //Add time setstate here
    this.props.actions.updateProgress(newProgress);
    //this.setState({ progress: newProgress });
    console.log("____INDEX____", this.props.index);
  }
  render() {
    return (
      <View style={{ paddingTop: 2 }}>
        <Carousel
          data={this.props.dataFromMain}
          itemWidth={sliderWidth}
          sliderWidth={sliderWidth}
          removeClippedSubviews
          layout="default"
          onSnapToItem={index => this.updateProgress(index)}
          renderItem={this.renderItem}
        />
        <View>
          <ProgressViewIOS
            progress={this.props.progress}
            progressTintColor={colors.CameraBlack}
            trackTintColor={colors.LightOrange}
            style={{ transform: [{ scaleX: 1.0 }, { scaleY: 4 }], height: 8 }}
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
)(ImageView);
