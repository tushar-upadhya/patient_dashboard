import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActivitySquare } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <ActivitySquare className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">
                        Healthcare Analytics
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=healthcare"
                            alt="User"
                        />
                        <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
