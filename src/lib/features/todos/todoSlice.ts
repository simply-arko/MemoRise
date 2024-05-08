import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { EditTodoAction, Todo } from "@/interface";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state.length = 0;
            state.push(...action.payload);
        },
        addTodo: (state, action: PayloadAction<Todo>) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload.text,
                tags: action.payload.tags,
                user: action.payload.user,
                title: action.payload.title,
            };
            state.push(todo);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action: PayloadAction<EditTodoAction>) => {
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        },
    },
});

export const { addTodo, removeTodo, editTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
