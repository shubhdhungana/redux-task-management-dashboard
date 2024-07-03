import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({ title }));
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 border rounded-lg shadow-md"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full mb-2"
        placeholder="Enter task title"
      />
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
