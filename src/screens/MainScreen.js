import React, { useState, useEffect } from "react";
import {
    CameraRoll, AsyncStorage, Button
} from "react-native";

import moment from "moment";
import ImagePicker from "react-native-image-crop-picker";
import ImageView from "../components/ImageView";

const MainScreen = () => {
    useEffect(() => {
        getData();
    }, []);
    const [imageData, setImageData] = useState([]);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateProgress = (index) => {
        index === 0 ? (
            setProgress(index / imageData.length)
        ) : (newIndex = index + 1, setProgress(newIndex / imageData.length));
        setCurrentIndex(index);
    };
    const clearAsyncStorage = async () => {
        AsyncStorage.clear();
    };

    const openCamera = () => {
        ImagePicker.openCamera({}).then(async (image) => {
            console.log(image);
            CameraRoll.saveToCameraRoll(image.path);
            d = new Date();
            newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
            await setImageData(
                [...imageData, { link: image.path, time: newTime }]
            );
            imageData.length === 0 ? null : updateProgress(currentIndex / imageData.length);
            storeData();
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
    return (
        <>
            <ImageView
                imageData={imageData}
                openCamera={openCamera}
                progress={progress}
                updateProgress={updateProgress}
            />
            <Button onPress={() => clearAsyncStorage()} title="Clear" />
        </>
    );
};
export default MainScreen;
