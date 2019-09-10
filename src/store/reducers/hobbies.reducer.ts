import {
  GET_HOBBIES,
  IHobbiesActions,
  IHobbiesState,
} from "../types/hobbies.types";

const initialState: IHobbiesState = {
  list: [],
};

export function hobbiesReducer(state = initialState, action: IHobbiesActions) {
  switch (action.type) {
    case GET_HOBBIES:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
