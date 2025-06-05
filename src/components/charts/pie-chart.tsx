/* eslint-disable @typescript-eslint/no-explicit-any */
import { chartColors } from "@/data/mockData";
import {
    Cell,
    Pie,
    PieChart as RechartsPieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

interface PieChartProps {
    data: any[];
    dataKey?: string;
    nameKey?: string;
    height?: number;
    innerRadius?: number;
    outerRadius?: number;
    centerText?: string;
}

export function PieChart({
    data,
    dataKey = "value",
    nameKey = "name",
    height = 300,
    innerRadius = 60,
    outerRadius = 80,
    centerText,
}: PieChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <RechartsPieChart
                margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    paddingAngle={2}
                    dataKey={dataKey}
                    nameKey={nameKey}
                    label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                    }
                >
                    {data.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={chartColors[index % chartColors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        backgroundColor: "var(--background)",
                        borderColor: "var(--border)",
                        borderRadius: "var(--radius)",
                    }}
                    formatter={(value) => [`${value}`, ""]}
                    labelFormatter={(name) => `${name}`}
                />
                {centerText && (
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-lg font-semibold"
                    >
                        {centerText}
                    </text>
                )}
            </RechartsPieChart>
        </ResponsiveContainer>
    );
}
