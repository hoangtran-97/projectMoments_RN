import { updateIndexActionTypes } from "./actionTypes";
export const updateIndex = newIndex => {
  return {
    type: "UPDATE_INDEX",
    newIndex
  };
};
