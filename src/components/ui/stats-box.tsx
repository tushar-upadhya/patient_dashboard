import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StatsBoxData } from "@/types";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export function StatsBox({ title, value, change, trend, icon }: StatsBoxData) {
    return (
        <Card
            className={cn(
                "relative overflow-hidden p-4 transition-all duration-300 ease-in-out cursor-pointer group",
                "bg-[#8EC5FF]/90 backdrop-blur-md border border-gray-100/50 shadow-sm",
                "rounded-2xl hover:shadow-md hover:scale-[1.01]"
            )}
        >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 opacity-80" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4">
                <CardTitle className="text-sm font-medium tracking-tight text-gray-800">
                    {title}
                </CardTitle>
                {icon && (
                    <div className="h-5 w-5 text-gray-400 transition-all duration-200 group-hover:text-[#2B7FFF] group-hover:scale-110">
                        {icon}
                    </div>
                )}
            </CardHeader>
            <CardContent className="px-4 pt-1 pb-3">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-gray-900 tracking-tight">
                        {value.toLocaleString()}
                    </div>
                    <div
                        className={cn(
                            "flex items-center px-2 py-1 rounded-full",
                            trend === "up"
                                ? "bg-emerald-100/80 text-emerald-700"
                                : "bg-rose-100/80 text-rose-700"
                        )}
                    >
                        {trend === "up" ? (
                            <ArrowUpIcon className="mr-1 h-3.5 w-3.5" />
                        ) : trend === "down" ? (
                            <ArrowDownIcon className="mr-1 h-3.5 w-3.5" />
                        ) : null}
                        <span className="text-xs animate-pulse font-semibold">
                            {change > 0 ? "+" : ""}
                            {change.toFixed(1)}%
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
