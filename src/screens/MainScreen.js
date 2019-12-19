import React, { useState } from "react";
import {
    CameraRoll
} from "react-native";

import moment from "moment";
import ImagePicker from "react-native-image-crop-picker";
import ImageView from "../components/ImageView";

const MainScreen = () => {
    const images = [
        {
            link:
                "https://media1.tenor.com/images/452cea6cc5abcfbac66d1b62a18bacf5/tenor.gif?itemid=8474302",
            time: "July 15th 2019"
        },
        {
            link:
                "https://media1.tenor.com/images/21ebb8eb5b0485778d4e8d53662f64bb/tenor.gif?itemid=9272794"
        },
        {
            link: "https://i.imgur.com/gpgjBPh.jpg",
            time: "December 21st 2018, 20:28 pm"
        },
        {
            link: "https://i.imgur.com/uzqxLku.jpg",
            time: "Febuary 10th 2019, 12:09 pm"
        },
        {
            link: "https://i.imgur.com/TId5QpJ.jpg",
            time: "Febuary 13rd 2019, 09:56 am"
        },
        {
            link: "https://i.imgur.com/KuwYCYs.jpg",
            time: "Febuary 14nd 2019, 14:57 pm"
        },
        {
            link: "https://i.imgur.com/2pgHMbL.jpg",
            time: "Febuary 14nd 2019, 16:29 pm"
        },
        {
            link: "https://i.imgur.com/X42ZEV4.jpg",
            time: "Febuary 14nd 2019, 23:29 pm"
        }
    ];
    const [imageData, setImageData] = useState(images);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateProgress = (index) => {
        index === 0 ? (
            setProgress(index / imageData.length)
        ) : (newIndex = index + 1, setProgress(newIndex / imageData.length));
        setCurrentIndex(index);
    };

    const openCamera = () => {
        ImagePicker.openCamera({}).then((image) => {
            CameraRoll.saveToCameraRoll(image.path);
            d = new Date();
            newTime = moment(d).format("MMMM Do YYYY, HH:mm a");
            setImageData(
                [...imageData, { link: image.path, time: newTime }]
            );
            updateProgress(currentIndex - 1);
        });
    };

    return (
        <>
            <ImageView
                imageData={imageData}
                openCamera={openCamera}
                progress={progress}
                updateProgress={updateProgress}
            />
        </>
    );
};
export default MainScreen;
