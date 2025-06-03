import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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

const normalizeTabValue = (label: string) =>
    label.toLowerCase().replace(/\s/g, "");

const tabItems = [
    { label: "Dashboard", icon: Home, path: "/dashboard" },
    { label: "Patient Details", icon: Users, path: "/patients" },
    { label: "Medical Records", icon: FileText, path: "/records" },
    { label: "Medicines", icon: Pill, path: "/medicines" },
    { label: "Payments", icon: CreditCard, path: "/payments" },
    { label: "Reports", icon: BarChart2, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
];

const getTabValueFromPath = (pathname: string) => {
    const normalizedPath = pathname.replace(/\/$/, "");
    const tab = tabItems.find(
        (t) =>
            normalizedPath === t.path || normalizedPath.startsWith(t.path + "/")
    );
    return tab ? normalizeTabValue(tab.label) : normalizeTabValue("Dashboard");
};

export const BottomTabs: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentTab = getTabValueFromPath(location.pathname);

    const handleNavigate = (value: string) => {
        const tab = tabItems.find((t) => normalizeTabValue(t.label) === value);
        if (tab) navigate(tab.path);
    };

    return (
        <div>
            {/* Mobile & Tablet View */}
            <div className="lg:hidden px-4 py-3 bg-muted w-full fixed bottom-0 left-0 z-10 shadow-md">
                <Select value={currentTab} onValueChange={handleNavigate}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a section" />
                    </SelectTrigger>
                    <SelectContent>
                        {tabItems.map(({ label }) => (
                            <SelectItem
                                key={label}
                                value={normalizeTabValue(label)}
                            >
                                {label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block">
                <Tabs value={currentTab} className="w-full">
                    <TabsList className="flex items-center justify-center gap-6 px-6 py-3 bg-muted rounded-lg max-w-screen-2xl mx-auto mt-4">
                        {tabItems.map(({ label, icon: Icon, path }) => (
                            <TabsTrigger
                                key={path}
                                value={normalizeTabValue(label)}
                                className="flex items-center gap-2 px-5 py-2 text-sm whitespace-nowrap"
                                onClick={() => navigate(path)}
                            >
                                <Icon className="h-5 w-5" />
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
};
