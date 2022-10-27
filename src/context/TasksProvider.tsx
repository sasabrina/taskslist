import { getLocalStorage, setLocalStorage } from "@/helpers/localStorage";
import { TasksState, Task } from "@/models";
import { type } from "os";
import { useEffect, useReducer } from "react";
import { TasksContext } from "./TasksContext";
import { tasksReducer } from "./tasksReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TasksState = getLocalStorage("tasks")
  ? JSON.parse(getLocalStorage("tasks") as string)
  : {
      tasks: [],
      showCompleted: true,
    };

export const TasksProvider = ({ children }: props) => {
  const [tasksState, dispatch] = useReducer(tasksReducer, INITIAL_STATE);

  useEffect(() => {
    setLocalStorage("tasks", tasksState);
  }, [tasksState]);

  const handleTaskSubmit = (title: Task["title"]) => {
    const newTask = {
      id: String(Date.now()),
      title,
      completed: false,
    };
    dispatch({ type: "addTask", payload: newTask });
  };

  const handleEditTask = (id: Task["id"], title: Task["title"]) => {
    dispatch({ type: "editTask", payload: { id, title } });
  };

  const handleCompleteTask = (id: Task["id"]) =>
    dispatch({ type: "completeTask", payload: { id } });

  const handleToggleShowCompled = () =>
    dispatch({ type: "toggleShowCompleted" });

  const handleToggleCompletedTasks = () =>
    dispatch({ type: "toggleCompletedTasks" });
  return (
    <TasksContext.Provider
      value={{
        tasksState,
        handleTaskSubmit,
        handleEditTask,
        handleCompleteTask,
        handleToggleShowCompled,
        handleToggleCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
