import React, { Component } from "react";
import { Text, View, Dimensions, Image, ProgressViewIOS } from "react-native";
import Carousel from "react-native-snap-carousel";
import colors from "../Styles/colors";
import styles from "../Styles/styles";
import moment from "moment";
const sliderWidth = Dimensions.get("window").width;
class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      time: ""
    };
    console.log("_____TEST____", this.props.dataFromMain);
  }
  renderItem({ item }) {
    return (
      <View style={styles.carouselView}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: item.link
          }}
          resizeMode="center"
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{ paddingTop: 2 }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginLeft: 15,
            backgroundColor: colors.LightOrange
          }}
        >
          <Text style={{}}>
            {moment(this.state.time).format("MMMM Do YYYY, HH:mm a")}
          </Text>
        </View>
        <Carousel
          data={this.props.dataFromMain}
          itemWidth={sliderWidth - 30}
          sliderWidth={sliderWidth}
          removeClippedSubviews
          layout="default"
          onSnapToItem={index => {
            if (index == 0) {
              newProgress = index / this.props.dataFromMain.length;
            } else {
              index++;
              newProgress = index / this.props.dataFromMain.length;
            }
            //Add time setstate here
            this.setState({ progress: newProgress });
          }}
          renderItem={this.renderItem}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <ProgressViewIOS
            progress={this.state.progress}
            progressTintColor={colors.Orange}
            trackTintColor={colors.LightOrange}
            style={{ transform: [{ scaleX: 1.0 }, { scaleY: 4 }], height: 12 }}
          />
        </View>
      </View>
    );
  }
}

export default ImageView;
