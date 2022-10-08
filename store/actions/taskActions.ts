import { ADD_NEW_TASK, DELETE_TASK, REVERSE_STATUS_OF_TASK } from "../types";

export const addNewTask = (addNewTask: string) => async (dispatch: any) => {
  dispatch({
    type: ADD_NEW_TASK,
    payload: { whatTodo: addNewTask },
  });
};

export const reverseStatusOfTask = (index: number) => async (dispatch: any) => {
  dispatch({
    type: REVERSE_STATUS_OF_TASK,
    payload: { index },
  });
};

export const deleteTask = (index: number) => async (dispatch: any) => {
  dispatch({
    type: DELETE_TASK,
    payload: { index },
  });
};
