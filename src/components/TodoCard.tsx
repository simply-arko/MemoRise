import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export default function TodoCard() {
    return (
        <div className="w-full border-[#080808] border-2 px-6 py-4 rounded-xl min-h-[200px] bg-[#141414]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-x-2">
                    <h1 className="text-xl">Basic Details</h1>
                    <Badge
                        variant={"outline"}
                        className="bg-[#1A241F] dark:text-green-300 self-center"
                    >
                        ON-CALL
                    </Badge>
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
                            >
                                <FaRegEdit className="mr-2 text-lg " />
                                Edit
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="delete"
                                className="text-red-500"
                            >
                                <RiDeleteBin6Line className="mr-2 text-lg " />
                                Delete
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Textarea
                value={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam atque inventore molestias. Velit ipsa eius facilis placeat sunt quo!"
                }
                disabled={true}
                className="mt-4 bg-white"
            />
            <div className="flex flex-row gap-4 mt-4">
                <Avatar id="avatar">
                    <AvatarImage src={AvatartImagge} />
                    <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <Label htmlFor="avatar" className="self-center">
                    Arkojeet Bera
                </Label>
            </div>
        </div>
    );
}
