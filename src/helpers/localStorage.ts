import { TasksState } from "@/models";

export const setLocalStorage = (key: string, value: TasksState) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);
