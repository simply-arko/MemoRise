import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa6";
import { Textarea } from "./ui/textarea";

export default function DialogInput() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#3275F6]">
                    <FaPlus className="mr-2" />
                    Add a new note
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] text-white">
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
                        />
                    </div>
                    <div className="grid grid-cols-6 items-center gap-4">
                        <Label
                            htmlFor="name"
                            className="text-right text-lg font-semibold"
                        >
                            Name:
                        </Label>
                        <Input
                            id="name"
                            placeholder="Title"
                            className="col-span-5"
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
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
