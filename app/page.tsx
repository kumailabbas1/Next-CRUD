import AddTask from "./components/AddTask";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <div className="flex ">
      <Sidebar />
      <main className="w-1/2 mx-auto mt-4">
        <div className="my-5 flex flex-col gap-4">
          <h1 className="text-2xl">Todo list App IN NEXT TS</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}
