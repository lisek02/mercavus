import {
  GET_HOBBIES,
  IGetHobbiesAction,
} from "../types/hobbies.types";

import { IHobby } from "../../models/hobby";

export function getHobbies(payload: IHobby[]): IGetHobbiesAction {
  return {
    payload,
    type: GET_HOBBIES,
  };
}
