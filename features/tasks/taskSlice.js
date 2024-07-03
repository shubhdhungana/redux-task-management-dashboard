import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    removeTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    },
  },
});

export const { addTask, toggleTaskCompletion, updateTask, removeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
