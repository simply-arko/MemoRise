import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa6";
import { Textarea } from "./ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { TodoFormInput } from "@/interface";
import { useDispatch } from "react-redux";
import { addTodo } from "@/lib/features/todos/todoSlice";

export default function DialogInput() {
    const { register, handleSubmit, reset } = useForm<TodoFormInput>();
    const dispatch = useDispatch();

    const submitHandler: SubmitHandler<TodoFormInput> = (formData) => {
        const tags = formData.tags.split(" ");
        dispatch(addTodo({ ...formData, tags }));
        reset();
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#3275F6]">
                    <FaPlus className="mr-2" />
                    Add a new note
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] text-white">
                <form onSubmit={handleSubmit(submitHandler)}>
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl">
                            Add a new note
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-6 items-center gap-4">
                            <Label
                                htmlFor="title"
                                className="text-right text-lg font-semibold"
                            >
                                Title:
                            </Label>
                            <Input
                                id="title"
                                placeholder="Title"
                                className="col-span-5"
                                {...register("title", { required: true })}
                            />
                        </div>
                        <div className="grid grid-cols-6 items-center gap-4">
                            <Label
                                htmlFor="user"
                                className="text-right text-lg font-semibold"
                            >
                                User:
                            </Label>
                            <Input
                                id="user"
                                placeholder="Your cool name"
                                className="col-span-5"
                                {...register("user", { required: true })}
                            />
                        </div>
                        <div className="grid grid-cols-6 items-center gap-4">
                            <Label
                                htmlFor="tags"
                                className="text-right text-lg font-semibold"
                            >
                                Tags:
                            </Label>
                            <Input
                                id="tags"
                                placeholder="space-separated"
                                className="col-span-5"
                                {...register("tags", { required: false })}
                            />
                        </div>
                        <div className="grid grid-cols-6 items-center gap-4">
                            <Label
                                htmlFor="content"
                                className="text-right text-lg font-semibold self-start"
                            >
                                Note:
                            </Label>
                            <Textarea
                                placeholder="Tonight I'm gonna bang Anmanda!"
                                id="content"
                                className="col-span-5 min-h-[100px] dark:bg-slate-950"
                                {...register("text", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <DialogClose className="w-[100px] block" asChild>
                            <Button type="submit">Save</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
