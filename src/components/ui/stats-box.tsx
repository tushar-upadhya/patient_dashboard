import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StatsBoxData } from "@/types";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export function StatsBox({ title, value, change, trend, icon }: StatsBoxData) {
    return (
        <Card className={cn("group relative cursor-pointer bg-[#EEF5FB]")}>
            <CardHeader className="flex flex-row items-center justify-between p-3 pb-1 ">
                <CardTitle className="text-sm text-gray-700 tracking-tight">
                    {title}
                </CardTitle>
                {icon && (
                    <div className="text-gray-400 group-hover:text-[#2B7FFF] transition duration-200">
                        {icon}
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-3 pt-1">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-med text-gray-900">
                        {value.toLocaleString()}
                    </div>
                    <div
                        className={cn(
                            "flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium",
                            trend === "up"
                                ? "bg-emerald-100 text-emerald-600"
                                : "bg-rose-100 text-rose-600"
                        )}
                    >
                        {trend === "up" ? (
                            <ArrowUpIcon className="mr-1 h-3 w-3" />
                        ) : trend === "down" ? (
                            <ArrowDownIcon className="mr-1 h-3 w-3" />
                        ) : null}
                        <span>
                            {change > 0 ? "+" : ""}
                            {change.toFixed(1)}%
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
