import TaskForm from "../components/TaskForm";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">FSFlow — Submit a Task</h1>
      <TaskForm />
    </div>
  );
}
