import { updateIndexActionTypes } from "./actionTypes";
export const updateIndex = newIndex => {
  return {
    type: "UPDATE_INDEX",

    newIndex
  };
};
export const updateProgress = newProgress => {
  return {
    type: "UPDATE_PROGRESS",
    newProgress
  };
};
