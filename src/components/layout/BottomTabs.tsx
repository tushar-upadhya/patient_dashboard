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
import { useLocation, useNavigate } from "react-router-dom";

const tabItems = [
    { label: "Dashboard", icon: Home, path: "/dashboard" },
    { label: "Patient Details", icon: Users, path: "/patients" },
    { label: "Medical Records", icon: FileText, path: "/records" },
    { label: "Medicines", icon: Pill, path: "/medicines" },
    { label: "Payments", icon: CreditCard, path: "/payments" },
    { label: "Reports", icon: BarChart2, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

// Helper function to get tab value from path
function getTabValueFromPath(pathname: string) {
    // Normalize pathname (remove trailing slash)
    const normalized = pathname.replace(/\/$/, "");

    // Find tab with exact path or that starts with path (for nested routes)
    const tab = tabItems.find(
        (t) => normalized === t.path || normalized.startsWith(t.path + "/") // handles subroutes like /patients/123
    );
    return tab ? tab.label.toLowerCase().replace(/\s/g, "") : "dashboard"; // fallback
}

export const BottomTabs: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentTab = getTabValueFromPath(location.pathname);

    // DEBUGGING LOGS: remove after confirming
    console.log("Current Path:", location.pathname);
    console.log("Current Tab:", currentTab);

    return (
        <div>
            {/* Small screens */}
            <div className="fixed bottom-0 left-0 z-10 sm:hidden w-full">
                <Tabs value={currentTab} className="w-auto max-w-full">
                    <ScrollArea className="w-auto max-w-full rounded-t-lg bg-muted">
                        <TabsList className="flex w-max gap-3 px-3 py-2">
                            {tabItems.map(({ label, icon: Icon, path }) => {
                                const value = label
                                    .toLowerCase()
                                    .replace(/\s/g, "");
                                return (
                                    <TabsTrigger
                                        key={path}
                                        value={value}
                                        className="flex items-center gap-1 px-4 py-2 text-xs whitespace-nowrap"
                                        onClick={() => navigate(path)}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {label}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </Tabs>
            </div>

            {/* Medium+ screens */}
            <div className="hidden sm:block">
                <Tabs value={currentTab} className="w-full">
                    <TabsList className="flex items-center justify-center gap-6 px-6 py-3 bg-muted rounded-lg max-w-screen-2xl mx-auto">
                        {tabItems.map(({ label, icon: Icon, path }) => {
                            const value = label
                                .toLowerCase()
                                .replace(/\s/g, "");
                            return (
                                <TabsTrigger
                                    key={path}
                                    value={value}
                                    className="flex items-center gap-2 px-5 py-2 text-sm whitespace-nowrap"
                                    onClick={() => navigate(path)}
                                >
                                    <Icon className="h-5 w-5" />
                                    {label}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
};
