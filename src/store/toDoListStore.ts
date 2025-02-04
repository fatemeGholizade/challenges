import { create } from "zustand";
import { persist } from "zustand/middleware";

// declaration of interfaces that are needed as each task needs to have 4 properties
export interface ITodo {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}
// array and functions for updating store
interface ITodoStore {
  tasks: ITodo[];
  addListItem: (title: string, priority: string) => void;
  deleteListItem: (id: number) => void;
  toggleCompleteStatus: (id: number) => void;
}
// create zustand store and add persist to store data in local storage
//  have values after refresh
export const useTodoStore = create<ITodoStore>()(
  persist(
    (set) => ({
      tasks: [],
      // add function is structed in a way that the latest item be at top

      addListItem: (title, priority) =>
        set((state) => ({
          tasks: [{ id: Date.now(), title, priority, completed: false }, ...state.tasks],
        })),
      // for deleting, renew the items that their ID is not equal to the given ID to filter them 
      deleteListItem: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((todo) => todo.id !== id),
        })),

      //  toggle status function is implemented in a way that if a task is done goes to
      //  the end of the array of tasks 

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
