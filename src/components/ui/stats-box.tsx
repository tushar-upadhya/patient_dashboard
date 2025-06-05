import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsBoxData } from "@/types";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatsBox({ title, value, change, trend, icon }: StatsBoxData) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1 text-xs">
          {trend === 'up' ? (
            <ArrowUpIcon className="mr-1 h-4 w-4 text-emerald-500" />
          ) : trend === 'down' ? (
            <ArrowDownIcon className="mr-1 h-4 w-4 text-rose-500" />
          ) : null}
          <span
            className={cn(
              "text-xs font-medium",
              trend === 'up' 
                ? "text-emerald-500" 
                : trend === 'down' 
                  ? "text-rose-500" 
                  : "text-muted-foreground"
            )}
          >
            {change > 0 ? '+' : ''}{change}%
          </span>
          <span className="text-muted-foreground ml-1">from last period</span>
        </div>
      </CardContent>
    </Card>
  );
}