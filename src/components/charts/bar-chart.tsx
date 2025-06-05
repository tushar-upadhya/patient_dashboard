import { 
  Bar, 
  BarChart as RechartsBarChart, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";
import { chartColors } from "@/data/mockData";

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
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart 
        data={data} 
        margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        barGap={barGap}
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
          interval="preserveStartEnd"
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          tickLine={false} 
          axisLine={{ stroke: "var(--border)" }} 
          stroke="var(--muted-foreground)"
          tickFormatter={(value) => `${value}`} 
        />
        <Tooltip 
          cursor={{ fill: 'var(--accent)', opacity: 0.1 }}
          contentStyle={{ 
            backgroundColor: "var(--background)", 
            borderColor: "var(--border)", 
            borderRadius: "var(--radius)", 
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }} 
          labelStyle={{ color: "var(--muted-foreground)", fontWeight: "500" }}
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
        {dataKeys.map((key, index) => (
          <Bar 
            key={key} 
            dataKey={key} 
            name={labels ? labels[index] : key} 
            fill={chartColors[index % chartColors.length]} 
            radius={[4, 4, 0, 0]} 
            barSize={barSize}
            stackId={stacked ? "stack" : undefined}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}