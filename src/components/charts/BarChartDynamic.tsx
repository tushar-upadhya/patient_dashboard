/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    XAxis,
    YAxis,
} from "recharts";

interface BarChartDynamicProps {
    data: Array<Record<string, any>>;
    yAxisKey: string;
    xAxisKey: string;
    chartConfig: ChartConfig;
    title?: string;
    description?: string;
    footerText?: string;
    footerTrend?: string;
    className?: string;
}

const BarChartDynamic: React.FC<BarChartDynamicProps> = ({
    data,
    yAxisKey,
    xAxisKey,
    chartConfig,
    title = "Bar Chart",
    description = "",
    footerText = "",
    footerTrend = "",
    className,
}) => {
    return (
        <Card className={cn(" ", className)}>
            <CardHeader>
                <CardTitle className="text-muted-foreground capitalize font-medium">
                    {title}
                </CardTitle>
                <CardDescription className="">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={data}
                        layout="vertical"
                        margin={{ right: 16, bottom: 20 }}
                        height={Math.max(300, data.length * 50)}
                    >
                        <CartesianGrid
                            horizontal={false}
                            stroke="rgba(0, 0, 0, 0.1)"
                        />
                        <YAxis
                            dataKey={yAxisKey}
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                value.slice(0, 20) +
                                (value.length > 20 ? "..." : "")
                            }
                            hide
                        />
                        <XAxis
                            dataKey={xAxisKey}
                            type="number"
                            tick={{ fontSize: 10, fill: "#1e3a8a" }}
                            hide
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar
                            dataKey={xAxisKey}
                            layout="vertical"
                            fill={
                                chartConfig[xAxisKey]?.color ||
                                "rgba(59, 130, 246, 0.6)"
                            }
                            radius={4}
                        >
                            <LabelList
                                dataKey={yAxisKey}
                                position="insideLeft"
                                offset={8}
                                className="fill-slate-800 capitalize"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey={xAxisKey}
                                position="right"
                                offset={8}
                                className="fill-blue-600"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {footerText || footerTrend ? (
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    {footerTrend && (
                        <div className="flex gap-2 leading-none font-medium ">
                            {footerTrend} <TrendingUp className="h-4 w-4" />
                        </div>
                    )}
                    {footerText && (
                        <div className="text-muted-foreground font-medium leading-none">
                            {footerText}
                        </div>
                    )}
                </CardFooter>
            ) : null}
        </Card>
    );
};

export default BarChartDynamic;
