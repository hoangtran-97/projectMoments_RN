import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
const sliderWidth = Dimensions.get("window").width;
const dataDummy = [
  {
    name:
      "https://mondrian.mashable.com/2014%252F04%252F18%252F7d%252FAwkwardSeal.9c37e.jpg%252F1200x627.jpg?signature=nSTVebzRc9kH5MANu7QlKtbeVhM="
  },
  { name: "http://getwallpapers.com/wallpaper/full/2/3/f/545367.jpg" },
  {
    name:
      "https://1u0b5867gsn1ez16a1p2vcj1-wpengine.netdna-ssl.com/wp-content/uploads/2014/09/grumpy-cat-no-1.jpg"
  }
];
class ImageView extends Component {
  render() {
    return (
      <View style={{ paddingVertical: 15 }}>
        <Carousel
          data={dataDummy}
          itemWidth={sliderWidth - 30}
          sliderWidth={sliderWidth}
          removeClippedSubviews
          layout="default"
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
              />
            </View>
          )}
        />
      </View>
    );
  }
}
export default ImageView;
