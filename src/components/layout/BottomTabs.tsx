import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BarChart2,
    CreditCard,
    FileText,
    Home,
    Pill,
    Settings,
    Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabItems = [
    { label: "Dashboard", icon: Home, path: "/dashboard" },
    { label: "Patient Details", icon: Users, path: "/patients" },
    { label: "Medical Records", icon: FileText, path: "/records" },
    { label: "Medicines", icon: Pill, path: "/medicines" },
    { label: "Payments", icon: CreditCard, path: "/payments" },
    { label: "Reports", icon: BarChart2, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

export const BottomTabs: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Small screens: fixed bottom-left, width auto, horizontal scroll */}
            <div className="fixed bottom-0 left-0 z-10 sm:hidden">
                <Tabs defaultValue="dashboard" className="w-auto max-w-full">
                    <ScrollArea className="w-auto max-w-screen-xs rounded-t-lg bg-muted">
                        <TabsList className="flex w-max gap-1 p-2">
                            {tabItems.map(({ label, icon: Icon, path }) => (
                                <TabsTrigger
                                    key={path}
                                    value={label
                                        .toLowerCase()
                                        .replace(/\s/g, "")}
                                    className="flex items-center gap-1 px-3 py-1.5 text-xs"
                                    onClick={() => navigate(path)}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </Tabs>
            </div>

            {/* Medium+ screens: centered, full width */}
            <div className="hidden sm:block">
                <Tabs defaultValue="dashboard" className="w-full">
                    <TabsList className="flex items-center justify-center gap-2 p-2 bg-muted rounded-lg max-w-screen-2xl mx-auto">
                        {tabItems.map(({ label, icon: Icon, path }) => (
                            <TabsTrigger
                                key={path}
                                value={label.toLowerCase().replace(/\s/g, "")}
                                className="flex items-center gap-2 px-4 py-2 text-sm"
                                onClick={() => navigate(path)}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
};
