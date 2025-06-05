import { Button } from "@/components/ui/button";

import { Download } from "lucide-react";

export function DownloadButton() {
    return (
        <Button variant="outline" size="sm" className="ml-auto h-8 gap-1">
            <Download className="h-3.5 w-3.5 rounded-full" />
            {/* <span className="sr-only sm:not-sr-only sm:text-xs">Download</span> */}
        </Button>
    );
}
