import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center font-bold">
        Task Management Dashboard
      </h1>
      <TaskInput />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Tasks</h2>
          <TaskList />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <TaskFilter />
        </div>
      </div>
    </div>
  );
}
