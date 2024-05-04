import { useEffect } from "react";
import TodoCard from "./components/TodoCard";
import DialogInput from "./components/DialogInput";

export default function App() {
    useEffect(() => {
        // dark theme only :)
        document.querySelector("html")?.classList.remove("dark", "light");
        document.querySelector("html")?.classList.add("dark");
    });

    return (
        <div className="text-white h-full max-w-[1200px] px-[200px] pt-[80px] mx-auto">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-semibold">Memo-Rise</h1>
                <DialogInput />
            </div>
            <div className="mt-4 p-4">
                <TodoCard />
            </div>
        </div>
    );
}
