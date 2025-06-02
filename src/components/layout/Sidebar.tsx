import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
    BarChart2,
    CreditCard,
    FileText,
    Home,
    Menu,
    Pill,
    Settings,
    Users,
    X,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { label: "Dashboard", icon: Home, path: "/dashboard" },
    { label: "Patient Details", icon: Users, path: "/patients" },
    { label: "Medical Records", icon: FileText, path: "/records" },
    { label: "Medicines", icon: Pill, path: "/medicines" },
    { label: "Payments", icon: CreditCard, path: "/payments" },
    { label: "Reports", icon: BarChart2, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle button only visible on small screens */}
            <button
                className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md lg:hidden"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={20} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-64 border-r bg-background shadow-sm transform transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full",
                    "lg:translate-x-0" // always visible on large screens
                )}
            >
                <div className="h-16 flex items-center justify-between border-b px-4">
                    <h1 className="text-xl font-semibold">
                        Hospital Dashboard
                    </h1>
                    {/* Close button only on small screens */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                <ScrollArea className="h-[calc(100vh-4rem)] px-4 py-6">
                    <nav className="space-y-2">
                        {navItems.map(({ label, icon: Icon, path }) => (
                            <NavLink
                                key={label}
                                to={path}
                                onClick={() => setIsOpen(false)} // close on click (mobile)
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-muted text-primary"
                                            : "text-muted-foreground hover:bg-muted hover:text-primary"
                                    )
                                }
                            >
                                <Icon size={18} className="shrink-0" />
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </ScrollArea>
            </aside>
        </>
    );
};
