import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { log } from "console";


export default async function Home() {
  const todos = await getAllTodos();
  // console.log(todos);
  

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-300">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">Next-Ts-ChakraUI-Todo-App</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-7 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
