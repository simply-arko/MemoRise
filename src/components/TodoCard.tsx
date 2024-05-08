import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatartImagge from "../assets/ShortAvatar.png";
import { Label } from "@/components/ui/label";
import { EditFormInput, EditTodoAction, Todo } from "@/interface";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "@/lib/features/todos/todoSlice";
import { useState } from "react";

export default function TodoCard({ id, title, tags, text, user }: Todo) {
    const { register, handleSubmit } = useForm<EditFormInput>();
    const [editEnabled, setEditEnabled] = useState(false);
    const dispatch = useDispatch();

    const editSubmit: SubmitHandler<EditFormInput> = (formData) => {
        const newData: EditTodoAction = { id: id!, text: formData.text };
        dispatch(editTodo(newData));
        setEditEnabled(false);
    };

    return (
        <div className="w-full border-[#080808] border-2 px-6 py-4 rounded-xl min-h-[200px] bg-[#141414]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                    <h1 className="text-xl">{title}</h1>
                    {tags?.map((tag, index) => (
                        <Badge
                            variant={"outline"}
                            className="bg-[#1A241F] dark:text-green-300 self-center"
                            key={index}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="px-2 h-1 self-center"
                            variant="outline"
                        >
                            <BsThreeDots />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup>
                            <DropdownMenuRadioItem
                                value="edit"
                                className="opacity-70"
                                onClick={() => setEditEnabled(true)}
                            >
                                <FaRegEdit className="mr-2 text-lg " />
                                Edit
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="delete"
                                className="text-red-500"
                                onClick={() => dispatch(removeTodo(id!))}
                            >
                                <RiDeleteBin6Line className="mr-2 text-lg " />
                                Delete
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <form onSubmit={handleSubmit(editSubmit)}>
                <Textarea
                    defaultValue={text}
                    disabled={!editEnabled}
                    className="mt-4 bg-white"
                    {...register("text", { required: false })}
                />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4 mt-4">
                        <Avatar id="avatar">
                            <AvatarImage src={AvatartImagge} />
                            <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="avatar" className="self-center">
                            {user}
                        </Label>
                    </div>
                    <Button
                        className={`self-end ${
                            editEnabled ? `block` : `hidden`
                        }`}
                        type="submit"
                    >
                        Done
                    </Button>
                </div>
            </form>
        </div>
    );
}
