import { IHobby } from "../../models/hobby";

export const GET_HOBBIES = "[HOBBIES] GET_HOBBIES_LIST";

export interface IHobbiesState {
  list: IHobby[];
}

export interface IGetHobbiesAction {
  type: typeof GET_HOBBIES;
  payload: IHobby[];
}

export type IHobbiesActions = IGetHobbiesAction;
