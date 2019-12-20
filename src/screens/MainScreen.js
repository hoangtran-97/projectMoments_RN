import React, { useState, useEffect } from "react";
import {
    CameraRoll, AsyncStorage, Button, TouchableOpacity, ProgressViewIOS, StyleSheet, View
} from "react-native";
import * as Progress from "react-native-progress";
import firebase from "react-native-firebase";
import uuid from "uuid/v4";
import moment from "moment";
import ImagePicker from "react-native-image-crop-picker";
import LottieView from "lottie-react-native";
import ImageView from "../components/ImageView";
import colors from "../constants/colors";

const MainScreen = () => {
    const [imageData, setImageData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [onboarding, setOnboarding] = useState(true);
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        storeData();
    }, [imageData]);
    const updateProgress = (index) => {
        index === 0 ? (
            setProgress(index / imageData.length)
        ) : (newIndex = index + 1, setProgress(newIndex / imageData.length));
        setCurrentIndex(index);
        storeData();
    };
    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
        setImageData([]);
    };

    const openCamera = () => {
        ImagePicker.openCamera({}).then((image) => {
            CameraRoll.saveToCameraRoll(image.path);
            d = new Date();
            newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
            setImageData(
                [...imageData, { link: image.path, time: newTime, uploaded: false }]
            );
            imageData.length === 0 ? null : updateProgress(currentIndex / imageData.length);
        }).catch((e) => {
            alert(e);
        });
    };

    const getData = async () => {
        try {
            const imagesJSON = await AsyncStorage.getItem("imageData");
            imagesJSON === null ? null
                : (
                    imagesArray = JSON.parse(imagesJSON),
                    setImageData(imagesArray));
        } catch (error) {
            console.log(error);
        }
    };

    const storeData = async () => {
        try {
            await AsyncStorage.setItem("imageData", JSON.stringify(imageData));
        } catch (error) {
            console.log(error);
        }
    };
    const uploadImage = () => {
        const uploadData = imageData[currentIndex];
        const ext = uploadData.link.split(".").pop();
        const filename = `${uuid()}.${ext}`;
        firebase
            .storage()
            .ref(`tutorials/images/${filename}`)
            .putFile(uploadData.link)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`${percent}% done`);
                    setUploadProgress(percent);
                },
                (error) => {
                    unsubscribe();
                    alert("Sorry, Try again.", error);
                }
            );
    };
    return (
        <>
            <ImageView
                imageData={imageData}
                updateProgress={updateProgress}
            />
            <View style={styles.controlsContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        setOnboarding(false);
                        console.log(onboarding);
                        openCamera();
                    }}
                >
                    <LottieView
                        autoPlay={onboarding}
                        style={styles.icon}
                        source={require("../assets/cam.json")}
                    />
                </TouchableOpacity>
                <Progress.Circle progress={uploadProgress} size={40} color={colors.sub} showsText></Progress.Circle>
                <Button onPress={() => uploadImage()} title="Upload" color={colors.sub} />
            </View>
            <ProgressViewIOS
                progress={progress}
                progressTintColor={colors.sub}
                trackTintColor={colors.main}
                style={styles.progressBar}
            />
            <Button onPress={() => clearAsyncStorage()} title="Clear Storage" color={colors.sub} />
        </>
    );
};
const styles = StyleSheet.create({
    buttonCamera: {
        alignItems: "center",
        height: 50,
        justifyContent: "center"
    },
    controlsContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    icon: { height: 100, width: 100 },
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
        fontSize: 16
    },
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
export default MainScreen;
