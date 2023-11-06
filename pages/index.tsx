import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import {
  addNewTask,
  deleteTask,
  reverseStatusOfTask,
} from "../store/actions/taskActions";
import { useTypedDispatch, useTypedSelector } from "../store/store";
import { incrementCount } from "../store/actions/counterActions";

const Home: NextPage = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const dispatch = useTypedDispatch();
  const { allTasks } = useTypedSelector((state) => state.tasks);
  const { count } = useTypedSelector((state) => state.counter);

  return (
    <div className={styles.container}>
      new task{" "}
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addNewTask(newTaskText));
          setNewTaskText("");
        }}
      >
        submit
      </button>
      {allTasks.map((task, index) => (
        <>
          <br />
          {task.whatTodo}, status:{task.status ? "DONE" : "NOT DONE"}
          <button onClick={() => dispatch(reverseStatusOfTask(index))}>
            {!task.status ? "DONE" : "NOT DONE"}
          </button>
          <button onClick={() => dispatch(deleteTask(index))}>DELETE</button>
        </>
      ))}
      <div style={{ marginTop: 400 }}>Count: {count}</div>
      <button onClick={() => dispatch(incrementCount())}>increment</button>
    </div>
  );
};

export default Home;
