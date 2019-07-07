import React, { Component } from "react";
import { Text, View, Dimensions, Image, ProgressViewIOS } from "react-native";
import Carousel from "react-native-snap-carousel";
import colors from "../Styles/colors";
const sliderWidth = Dimensions.get("window").width;
const dataDummy = [
  {
    name:
      "https://media.gettyimages.com/photos/travel-woman-arms-outstretched-by-the-sea-picture-id638898418?s=2048x2048"
  },
  {
    name:
      "https://media1.tenor.com/images/ced3dc543f6db275e544f8d1fb3641e2/tenor.gif?itemid=9272787"
  },
  {
    name:
      "https://media1.tenor.com/images/01981ee970ee9409bb031d76d93f3a01/tenor.gif?itemid=8474279"
  },

  {
    name:
      "https://media1.tenor.com/images/8f7882f186fd49c25cd05f470247fe09/tenor.gif?itemid=9272799"
  },
  {
    name:
      "https://media1.tenor.com/images/452cea6cc5abcfbac66d1b62a18bacf5/tenor.gif?itemid=8474302"
  },
  {
    name:
      "https://media1.tenor.com/images/bdfecff3c30f96717f58ab477f544324/tenor.gif?itemid=8474276"
  }
];

class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  render() {
    return (
      <View style={{ paddingVertical: 15 }}>
        <Carousel
          data={dataDummy}
          itemWidth={sliderWidth - 30}
          sliderWidth={sliderWidth}
          removeClippedSubviews
          layout="default"
          onSnapToItem={index => {
            if (index == 0) {
              newProgress = index / dataDummy.length;
            } else {
              index++;
              newProgress = index / dataDummy.length;
            }

            this.setState({ progress: newProgress });
          }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "red",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: item.name
                }}
                resizeMode="center"
              />
            </View>
          )}
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
