import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, Input } from "@/globalStyles";
import { Task } from "@/models";

export interface TasksFormInterface {
  onSubmit: (title: Task["title"]) => void;
  task?: string;
  onEdit?: boolean;
}

const TasksForm: React.FC<TasksFormInterface> = ({
  onSubmit,
  onEdit = false,
  task,
}) => {
  const [taskValue, setTaskValue] = useState<string>(task ? task : "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.value) {
      setTaskValue(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (taskValue === "") return; // TODO: show some error

    onSubmit(taskValue);
    setTaskValue("");
  };

  return (
    <Form as="form" flex gap="10px" justify="center" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nueva tarea"
        value={taskValue}
        onChange={handleChange}
      />
      <Button type="submit">{onEdit ? "Guardar" : "Agregar"}</Button>
    </Form>
  );
};

export default TasksForm;
