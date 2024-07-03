import { useState } from "react";
import { useSelector } from "react-redux";

const TaskFilter = () => {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <ul className="mt-4 space-y-2">
        {filteredTasks.map((task) => (
          <li key={task.id} className="text-lg">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFilter;
