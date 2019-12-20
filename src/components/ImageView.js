import React from "react";
import {
    Text,
    View,
    Dimensions,
    ProgressViewIOS,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
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
const ImageView = ({
    imageData, progress, updateProgress, openCamera
}) => {
    console.log(imageData, progress);
    return (
        <>
            <Carousel
                data={imageData}
                itemWidth={sliderWidth}
                sliderWidth={sliderWidth}
                removeClippedSubviews
                layout="default"
                onSnapToItem={(index) => updateProgress(index)}
                renderItem={renderItem}
            />
            <View style={styles.buttonCamera}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => openCamera()}>
                    <LottieView
                        style={styles.icon}
                        source={require("../assets/cam_shot1.json")}
                    />
                </TouchableOpacity>
            </View>
            <ProgressViewIOS
                progress={progress}
                progressTintColor={colors.sub}
                trackTintColor={colors.main}
                style={styles.progressBar}
            />
        </>
    );
};
const styles = StyleSheet.create({
    buttonCamera: {
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    icon: { height: 100, width: 100 },
    imageBackground: {
        height: "100%",
        width: "100%"
    },
    imageBackgroundTimeContainer: {
        alignSelf: "flex-start",
        marginLeft: 10,
        marginTop: 5
    },
    imageBackgroundTimeText: { backgroundColor: colors.LightOrange },
    itemContainer: {
        alignItems: "center",
        height: "100%",
        justifyContent: "center"
    },
    progressBar: {
        height: 8,
        transform: [{ scaleX: 1.0 }, { scaleY: 4 }]
    }
});


export default ImageView;
