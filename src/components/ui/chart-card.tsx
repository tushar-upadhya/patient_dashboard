import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChartCardProps } from "@/types";
import { DownloadButton } from "./download-button";

export function ChartCard({
  title,
  subtitle,
  children,
  id,
  className,
  height = "auto",
}: ChartCardProps) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <DownloadButton chartId={id} filename={title.toLowerCase().replace(/\s+/g, '-')} />
      </CardHeader>
      <CardContent
        style={{ height }}
        className="px-2 pb-2"
      >
        {children}
      </CardContent>
    </Card>
  );
}