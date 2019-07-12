import { updateIndexActionTypes } from "../Actions/actionTypes";
const initialState = {
  progress: 0,
  currentIndex: 0
};
export default function(state = initialState, action) {
  switch (action.type) {
    case updateIndexActionTypes.UPDATE_INDEX:
      return Object.assign({}, state, {
        currentIndex: action.newIndex
      });
    case updateIndexActionTypes.UPDATE_PROGRESS:
      return Object.assign({}, state, {
        progress: action.newProgress
      });
    default:
      return state;
  }
}
