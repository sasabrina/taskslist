import { useContext, useState } from "react";
import { Task } from "@/models/interfaces";
import { TasksForm } from "@/components/TasksForm";
import { TasksContext } from "@/context/TasksContext";
import { Container, ListItem, Span } from "@/globalStyles";

export interface TaskInterface {
  task: Task;
}

const TaskItem: React.FC<TaskInterface> = ({ task }) => {
  const { handleEditTask, handleCompleteTask } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClick = () => setIsEditing(true);

  const handleEdit = (taskTitle: string): void => {
    handleEditTask(task.id, taskTitle);
    setIsEditing(false);
  };

  const handleComplete = () => handleCompleteTask(task.id);

  return (
    <ListItem>
      <Container>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleComplete}
        />
        <Span completed={task.completed} onClick={handleClick}>
          {task.title}
        </Span>
      </Container>

      {isEditing && (
        <Container>
          <TasksForm task={task.title} onSubmit={handleEdit} onEdit />
        </Container>
      )}
    </ListItem>
  );
};

export default TaskItem;
