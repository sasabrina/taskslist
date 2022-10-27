import { Task, TasksState } from "@/models/interfaces";
import { createContext } from "react";

export type TasksContextProps = {
  tasksState: TasksState;
  handleTaskSubmit: (title: Task["title"]) => void;
  handleEditTask: (id: Task["id"], title: Task["title"]) => void;
  handleCompleteTask: (id: Task["id"]) => void;
  handleToggleShowCompled: VoidFunction;
  handleToggleCompletedTasks: VoidFunction;
};

export const TasksContext = createContext<TasksContextProps>(
  {} as TasksContextProps
);
