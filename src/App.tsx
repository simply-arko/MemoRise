import { useEffect } from "react";
import TodoCard from "./components/TodoCard";
import DialogInput from "./components/DialogInput";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { Todo } from "./interface";
import { setTodos } from "./lib/features/todos/todoSlice";

export default function App() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        // dark theme only :)
        document.querySelector("html")?.classList.remove("dark", "light");
        document.querySelector("html")?.classList.add("dark");

        const storedTodos: Todo[] = JSON.parse(
            localStorage.getItem("todos") || "{"
        );

        if (storedTodos && storedTodos.length > 0) {
            dispatch(setTodos(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="text-white h-full max-w-[1200px] px-[200px] pt-[80px] mx-auto">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-semibold">Memo-Rise</h1>
                <DialogInput />
            </div>
            <div className="mt-4 p-4 flex flex-col gap-y-4">
                {todos.map((todo) => (
                    <TodoCard key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    );
}
