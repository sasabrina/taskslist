import { useContext, useEffect, useState } from "react";
import { TaskItem } from "@/components";
import { TasksContext } from "@/context";
import { Task } from "@/models";
import { List } from "@/globalStyles";

const TasksList = () => {
  const [taskslist, setTasksLists] = useState<Task[]>([]);
  const { tasksState } = useContext(TasksContext);
  const { tasks, showCompleted } = tasksState;

  useEffect(() => {
    setTasksLists(
      showCompleted ? tasks : tasks.filter(({ completed }) => !completed)
    );
  }, [tasks, showCompleted]);

  return (
    <List>
      {tasks.length > 0 ? (
        taskslist.map((task: Task, i: number) => (
          <TaskItem key={`${i}${task.id}`} task={task} />
        ))
      ) : (
        <p>No hay tareas</p>
      )}
    </List>
  );
};

export default TasksList;
