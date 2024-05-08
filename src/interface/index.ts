export interface Todo {
    id?: string;
    title: string;
    text: string;
    user: string;
    tags: string[];
}

export interface EditTodoAction {
    id: string;
    text: string;
}

export interface TodoFormInput {
    title: string;
    text: string;
    user: string;
    tags: string;
}

export interface EditFormInput {
    text: string;
}
