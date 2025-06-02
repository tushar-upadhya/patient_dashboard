import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Topbar: React.FC = () => (
    <div className="bg-white shadow px-4 py-2 flex justify-between items-center fixed w-full top-0 z-20 h-16 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <img
                src="https://via.placeholder.com/40"
                alt="Hospital Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-md"
            />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notification Bell */}
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 sm:h-2.5 sm:w-2.5 bg-red-500 rounded-full border border-white" />
            </Button>

            {/* Profile Dropdown with Avatar */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="p-0 rounded-full"
                    >
                        <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                            <AvatarImage
                                src="https://via.placeholder.com/32"
                                alt="User"
                            />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
);
