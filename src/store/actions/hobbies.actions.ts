import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { IHobby } from "../../models/hobby";
import {
  GET_HOBBIES,
  IGetHobbiesAction,
} from "../types/hobbies.types";

export function getHobbiesRequest(payload: IHobby[]): IGetHobbiesAction {
  return {
    payload,
    type: GET_HOBBIES,
  };
}

export function getHobbies() {
  return (dispatch: Dispatch) => {
    axios.get("./hobbies.json").then((response: AxiosResponse<IHobby[]>) => {
      dispatch(getHobbiesRequest(response.data));
    });
  };
}
