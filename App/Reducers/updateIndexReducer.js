import { updateIndexActionTypes } from "../Actions/actionTypes";
const initialState = {
  index: 0
};
export default function(state = initialState, action) {
  switch (action.type) {
    case updateIndexActionTypes.UPDATE_INDEX:
      return Object.assign({}, state, {
        index: action.newIndex
      });
    default:
      return state;
  }
}
