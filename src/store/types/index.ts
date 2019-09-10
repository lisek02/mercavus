import {
  IHobbiesActions,
  IHobbiesState,
} from "./hobbies.types";

export interface IState {
  hobbies: IHobbiesState;
}

export type IActions = IHobbiesActions;
