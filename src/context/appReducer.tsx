import ACTIONS from "./appActions";
import { IPokeApiState, Iaction } from "../types/types";

export const getInitialState = () => ({
  pokemonTeam: [],
});

export const stateReducer = (state: IPokeApiState, action: Iaction) => {
  switch (action.type) {
    case ACTIONS.UPDATE_STATE: {
      return {
        ...state,
        ...action.data,
      };
    }
    case ACTIONS.RESET_STATE: {
      return getInitialState();
    }
    default:
      return state;
  }
};
