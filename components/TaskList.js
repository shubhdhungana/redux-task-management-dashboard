import { useSelector, useDispatch } from "react-redux";
import { toggleTaskCompletion, removeTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`p-4 border rounded-lg shadow-md ${
            task.completed ? "bg-gray-100" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <p className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.title}
            </p>
            <div>
              <button
                onClick={() => handleToggleCompletion(task.id)}
                className={`p-2 ${
                  task.completed
                    ? "bg-gray-400 text-gray-800"
                    : "bg-green-500 text-white"
                } rounded mr-2`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
