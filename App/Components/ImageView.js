import React, { Component } from "react";
import { Text, View, Dimensions, Image, ProgressViewIOS } from "react-native";
import Carousel from "react-native-snap-carousel";
import colors from "../Styles/colors";
import returnData from "../Data/imageData";
import styles from "../Styles/styles";
import moment from "moment";
const sliderWidth = Dimensions.get("window").width;
const data = returnData();
console.log("data", data);
class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  renderItem({ item }) {
    return (
      <View style={styles.carouselView}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            backgroundColor: colors.LightOrange
          }}
        >
          <Text>{moment(item.time).format("MMMM Do YYYY, HH:mm a")}</Text>
        </View>
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
        <Carousel
          data={data}
          itemWidth={sliderWidth - 30}
          sliderWidth={sliderWidth}
          removeClippedSubviews
          layout="default"
          onSnapToItem={index => {
            if (index == 0) {
              newProgress = index / data.length;
            } else {
              index++;
              newProgress = index / data.length;
            }

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
