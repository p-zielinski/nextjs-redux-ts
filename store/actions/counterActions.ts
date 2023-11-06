import { COUNTER_ADD } from "../types";

export const incrementCount = () => async (dispatch: any) => {
  dispatch({
    type: COUNTER_ADD,
  });
};
