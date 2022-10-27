export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
  showCompleted: boolean;
}
