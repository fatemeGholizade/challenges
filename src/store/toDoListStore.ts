import { create } from "zustand";
import { persist } from "zustand/middleware";
interface ITodo {
    id: number;
    title: string;
    completed: boolean;
  };
  
  interface ITodoStore {
    todos: ITodo[];
    addListItem: (title: string) => void;
    deleteListItem: (id: number) => void;
    toggleCompleteStatus: (id: number) => void;
  };
  
  export const useTodoStore = create<ITodoStore>()(
    persist(
      (set) => ({
        todos: [],
        addListItem: (title) =>
          set((state) => ({
            todos: [...state.todos, { id: Date.now(), title, completed: false }],
          })),
        deleteListItem: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        toggleCompleteStatus: (id) =>
          set((state) => {
            const todos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            return {
              todos: [...todos.filter((t) => !t.completed), ...todos.filter((t) => t.completed)],
            };
          }),
      }),
      {
        name: "todo-list",
      }
    )
  );
  