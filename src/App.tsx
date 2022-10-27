import { useContext, useEffect, useState } from "react";
import { TasksCompletedToggle, TasksForm, TasksList } from "@/components";
import { TasksContext } from "@/context";
import { H1, MainContainer } from "./globalStyles";

function App() {
  const { tasksState, handleTaskSubmit, handleToggleShowCompled } =
    useContext(TasksContext);
  const { showCompleted } = tasksState;

  return (
    <MainContainer>
      <H1>Lista de Tareas</H1>

      <TasksCompletedToggle
        onToggle={handleToggleShowCompled}
        isShowing={showCompleted}
      />

      <TasksForm onSubmit={handleTaskSubmit} />

      <TasksList />
    </MainContainer>
  );
}

export default App;
