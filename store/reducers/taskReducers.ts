import { TASK_ADD_NEW, TASK_DELETE, TASK_REVERSE_STATUS } from "../types";

const initState = {
  allTasks: [],
};

type storeType = {
  allTasks: { status: boolean; whatTodo: string }[];
};

const taskReducers = (
  state = initState as unknown as storeType,
  action: any
) => {
  switch (action.type) {
    case TASK_ADD_NEW:
      return {
        ...state,
        allTasks: [
          ...state.allTasks,
          { status: false, whatTodo: action.payload.whatTodo },
        ],
      };
    case TASK_REVERSE_STATUS:
      return {
        ...state,
        allTasks: state.allTasks.map((value, index) => {
          if (index !== action.payload.index) {
            return value;
          }
          return { ...value, status: !value.status };
        }),
      };
    case TASK_DELETE:
      state.allTasks.splice(action.payload.index, 1);
      return { ...state };
    default:
      return { ...state };
  }
};

export default taskReducers;
