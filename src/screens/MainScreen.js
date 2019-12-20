import React, { useState, useEffect } from "react";
import {
    CameraRoll, AsyncStorage, Button
} from "react-native";

import moment from "moment";
import ImagePicker from "react-native-image-crop-picker";
import firebase from "react-native-firebase";
import uuid from "uuid/v4";
import ImageView from "../components/ImageView";

const MainScreen = () => {
    const [imageData, setImageData] = useState([{
        link:
            "/private/var/mobile/Containers/Data/Application/B2BB4259-F556-4E8B-8770-129C51D49219/tmp/react-native-image-crop-picker/01206EDC-EC10-448D-AB69-2660C3294A8E.jpg",
        time: "July 15th 2019"
    }]);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
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
    };

    const openCamera = () => {
        ImagePicker.openCamera({}).then((image) => {
            CameraRoll.saveToCameraRoll(image.path);
            d = new Date();
            newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
            setImageData(
                [...imageData, { link: image.path, time: newTime }]
            );
            imageData.length === 0 ? null : updateProgress(currentIndex / imageData.length);
        }).catch((e) => {
            alert(e);
        });
    };
    const uploadImage = () => {
        const testData = {
            link:
                "/private/var/mobile/Containers/Data/Application/B2BB4259-F556-4E8B-8770-129C51D49219/tmp/react-native-image-crop-picker/01206EDC-EC10-448D-AB69-2660C3294A8E.jpg",
            time: "July 15th 2019"
        };
        const ext = testData.link.split(".").pop();
        const filename = `${uuid()}.${ext}`;
        firebase
            .storage()
            .ref(`tutorials/images/${filename}`)
            .putFile(testData.link)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`${percent}% done`);
                },
                (error) => {
                    unsubscribe();
                    alert("Sorry, Try again.", error);
                }
            );
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
            <Button onPress={() => uploadImage()} title="Clear Storage" />
        </>
    );
};
export default MainScreen;
