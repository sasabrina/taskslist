import { Button, Container } from "@/globalStyles";
import React from "react";

export interface TasksCompletedToggleInterface {
  onToggle: VoidFunction;
  isShowing: boolean;
}

const TasksCompletedToggle: React.FC<TasksCompletedToggleInterface> = ({
  onToggle,
  isShowing,
}) => {
  const buttonTitle = isShowing ? "Ocultar" : "Mostrar";
  return (
    <Container flex justify="center">
      <Button onClick={onToggle}>{buttonTitle} completadas</Button>
    </Container>
  );
};

export default TasksCompletedToggle;
