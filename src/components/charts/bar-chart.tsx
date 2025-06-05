import { chartColors } from "@/data/mockData";
import {
    Bar,
    CartesianGrid,
    Legend,
    BarChart as RechartsBarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface BarChartProps {
    data: any[];
    dataKeys: string[];
    xAxisDataKey?: string;
    height?: number;
    labels?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    stacked?: boolean;
    barGap?: number;
    barSize?: number;
    onClickBar?: (data: any) => void; // Added click handler prop
}

export function BarChart({
    data,
    dataKeys,
    xAxisDataKey = "name",
    height = 300,
    labels,
    showGrid = true,
    showLegend = true,
    stacked = false,
    barGap = 4,
    barSize = 20,
    onClickBar,
}: BarChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
                barGap={barGap}
            >
                {showGrid && (
                    <CartesianGrid
                        strokeDasharray="4 4"
                        vertical={false}
                        stroke="var(--border)"
                        opacity={0.3}
                    />
                )}
                <XAxis
                    dataKey={xAxisDataKey}
                    tick={{ fontSize: 13, fill: "var(--muted-foreground)" }}
                    tickLine={false}
                    axisLine={{ stroke: "var(--border)" }}
                    interval="preserveStartEnd"
                />
                <YAxis
                    tick={{ fontSize: 13, fill: "var(--muted-foreground)" }}
                    tickLine={false}
                    axisLine={{ stroke: "var(--border)" }}
                />

                <Tooltip
                    cursor={{ fill: "var(--accent)", opacity: 0.08 }}
                    contentStyle={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        boxShadow:
                            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
                        padding: "0.75rem",
                    }}
                    labelStyle={{
                        color: "var(--muted-foreground)",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        marginBottom: "0.5rem",
                    }}
                    itemStyle={{
                        color: "var(--foreground)",
                        fontSize: "0.85rem",
                        paddingBottom: "0.25rem",
                    }}
                />

                {showLegend && (
                    <Legend
                        wrapperStyle={{
                            paddingTop: 20,
                            fontSize: "0.85rem",
                            color: "var(--muted-foreground)",
                        }}
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        iconSize={10}
                    />
                )}

                {dataKeys.map((key, index) => (
                    <Bar
                        key={key}
                        dataKey={key}
                        name={labels?.[index] ?? key}
                        fill={chartColors[index % chartColors.length]}
                        radius={[6, 6, 0, 0]}
                        barSize={barSize}
                        stackId={stacked ? "stack" : undefined}
                        isAnimationActive={true}
                        onClick={({ payload }) => {
                            if (onClickBar) {
                                onClickBar(payload);
                            }
                        }}
                        cursor={onClickBar ? "pointer" : undefined}
                    />
                ))}
            </RechartsBarChart>
        </ResponsiveContainer>
    );
}
