import React from "react";
import {
    Text,
    View,
    Dimensions,
    ImageBackground,
    StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import LottieView from "lottie-react-native";
import colors from "../constants/colors";

const sliderWidth = Dimensions.get("window").width;
const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <ImageBackground
            style={styles.imageBackground}
            source={{
                uri: item.link
            }}
            resizeMode="center"
        >
            {item.time ? (
                <View
                    style={styles.imageBackgroundTimeContainer}
                >
                    <Text style={styles.imageBackgroundTimeText}>
                        {item.time}
                    </Text>
                </View>
            ) : null}
        </ImageBackground>
    </View>
);
const ImageView = ({ imageData, updateProgress }) => (
    <>
        {imageData.length === 0 ? (
            <>
                <LottieView source={require("../assets/empty.json")} autoPlay style={styles.lottie} />
                <Text style={styles.lottieText}>It is a bit empty here!</Text>
                <Text style={styles.lottieText}>Start saving the Moments!</Text>
            </>
        )
            : (
                <Carousel
                    data={imageData}
                    itemWidth={sliderWidth}
                    sliderWidth={sliderWidth}
                    removeClippedSubviews
                    layout="default"
                    onSnapToItem={(index) => updateProgress(index)}
                    renderItem={renderItem}
                />
            )}
    </>
);
const styles = StyleSheet.create({
    imageBackground: {
        height: "100%",
        width: "100%"
    },
    imageBackgroundTimeContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 10,
        marginTop: 5
    },
    imageBackgroundTimeText: {
        color: colors.sub,
        fontSize: 16,
        fontWeight: "700"
    },
    itemContainer: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center"
    },
    lottie: {

    },
    lottieText: {
        alignSelf: "center",
        color: colors.sub,
        fontSize: 16,
        fontWeight: "700"
    }
});


export default ImageView;
