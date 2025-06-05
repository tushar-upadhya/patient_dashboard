/* eslint-disable @typescript-eslint/no-explicit-any */
import { chartColors } from "@/data/mockData";
import {
    Area,
    Brush,
    CartesianGrid,
    Legend,
    AreaChart as RechartsAreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface AreaChartProps {
    data: any[];
    dataKeys: string[];
    xAxisDataKey?: string;
    height?: number;
    labels?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    stacked?: boolean;
    interactive?: boolean;
}

export function AreaChart({
    data,
    dataKeys,
    xAxisDataKey = "date",
    height = 300,
    labels,
    showGrid = true,
    showLegend = true,
    stacked = false,
    interactive = true,
}: AreaChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsAreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
            >
                {showGrid && (
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="var(--border)"
                        opacity={0.4}
                    />
                )}
                <XAxis
                    dataKey={xAxisDataKey}
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={{ stroke: "var(--border)" }}
                    stroke="var(--muted-foreground)"
                />
                <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={{ stroke: "var(--border)" }}
                    stroke="var(--muted-foreground)"
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border)",
                        borderRadius: "var(--radius)",
                        boxShadow:
                            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    }}
                    labelStyle={{
                        color: "var(--muted-foreground)",
                        fontWeight: "500",
                    }}
                    itemStyle={{ color: "var(--foreground)" }}
                />
                {showLegend && (
                    <Legend
                        wrapperStyle={{ paddingTop: 15 }}
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        iconSize={8}
                    />
                )}
                {interactive && (
                    <Brush
                        dataKey={xAxisDataKey}
                        height={30}
                        stroke="var(--primary)"
                        fill="var(--background)"
                        tickFormatter={(value) => value.toString()}
                    />
                )}
                {dataKeys.map((key, index) => (
                    <Area
                        key={key}
                        type="monotone"
                        dataKey={key}
                        name={labels ? labels[index] : key}
                        fill={chartColors[index % chartColors.length]}
                        stroke={chartColors[index % chartColors.length]}
                        fillOpacity={0.2}
                        strokeWidth={2}
                        stackId={stacked ? "stack" : undefined}
                    />
                ))}
            </RechartsAreaChart>
        </ResponsiveContainer>
    );
}
