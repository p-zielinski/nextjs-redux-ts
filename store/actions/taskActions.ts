import { TASK_ADD_NEW, TASK_DELETE, TASK_REVERSE_STATUS } from "../types";

export const addNewTask = (addNewTask: string) => async (dispatch: any) => {
  dispatch({
    type: TASK_ADD_NEW,
    payload: { whatTodo: addNewTask },
  });
};

export const reverseStatusOfTask = (index: number) => async (dispatch: any) => {
  dispatch({
    type: TASK_REVERSE_STATUS,
    payload: { index },
  });
};

export const deleteTask = (index: number) => async (dispatch: any) => {
  dispatch({
    type: TASK_DELETE,
    payload: { index },
  });
};
