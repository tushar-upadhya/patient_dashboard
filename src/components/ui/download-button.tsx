import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadChartAsPNG } from "@/lib/utils";
import { DownloadButtonProps } from "@/types";

export function DownloadButton({ chartId, filename }: DownloadButtonProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-auto h-8 gap-1"
      onClick={() => downloadChartAsPNG(chartId, filename)}
    >
      <Download className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:text-xs">Download</span>
    </Button>
  );
}