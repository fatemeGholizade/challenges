import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface ITodo {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

interface ITodoStore {
  tasks: ITodo[];
  addListItem: (title: string, priority: string) => void;
  deleteListItem: (id: number) => void;
  toggleCompleteStatus: (id: number) => void;
}

export const useTodoStore = create<ITodoStore>()(
  persist(
    (set) => ({
      tasks: [],
      addListItem: (title, priority) =>
        set((state) => ({
          tasks: [{ id: Date.now(), title, priority, completed: false }, ...state.tasks],
        })),
      deleteListItem: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((todo) => todo.id !== id),
        })),
      toggleCompleteStatus: (id) =>
        set((state) => {
          const tasks = state.tasks.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          return {
            tasks: [...tasks.filter((t) => !t.completed), ...tasks.filter((t) => t.completed)],
          };
        }),
    }),
    {
      name: "todo-list",
    }
  )
);
