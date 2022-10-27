import { getLocalStorage } from "@/helpers/localStorage";
import { TasksState, Task } from "@/models";

type TasksAction =
  | { type: "addTask"; payload: Task }
  | { type: "editTask"; payload: { id: Task["id"]; title: Task["title"] } }
  | { type: "completeTask"; payload: { id: string } }
  | { type: "toggleShowCompleted" }
  | { type: "toggleCompletedTasks" };

const initialState = {};
export const initializer = (initialValue = initialState) =>
  getLocalStorage("tasks") || initialValue;

export const tasksReducer = (
  state: TasksState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case "addTask":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "editTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : { ...task, title: action.payload.title }
        ),
      };

    case "completeTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : { ...task, completed: !task.completed }
        ),
      };

    case "toggleShowCompleted":
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };

    case "toggleCompletedTasks":
      return {
        ...state,
      };

    default:
      return state;
  }
};
