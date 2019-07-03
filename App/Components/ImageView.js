import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
const sliderWidth = Dimensions.get("window").width;
const dataDummy = [{ name: "A" }, { name: "B" }];
class ImageView extends Component {
  render() {
    return (
      <View>
        <Carousel
          sliderWidth={sliderWidth}
          sliderHeight={100}
          itemWidth={sliderWidth}
          minHeight={160}
          data={dataDummy}
          removeClippedSubviews
          layout="default"
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "red" }}>
              <Text>Test</Text>
              <Text>{dataDummy.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
export default ImageView;
