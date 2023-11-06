import { COUNTER_ADD } from "../types";

const initState = {
  count: 0,
};

const counterReducers = (state = initState, action: any) => {
  switch (action.type) {
    case COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return { ...state };
  }
};

export default counterReducers;
