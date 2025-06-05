// Date range types
export interface DateRange {
    from: Date | undefined;
    to: Date | undefined;
}

// Chart data types
export interface ChartData {
    id: string;
    name: string;
    value: number;
    color?: string;
}

export interface TimeSeriesData {
    date: string;
    [key: string]: string | number;
}

export interface AdmissionData {
    id: string;
    date: string;
    count: number;
    department: string;
    type: "emergency" | "scheduled" | "transfer";
}

export interface DischargeData {
    id: string;
    date: string;
    count: number;
    department: string;
    type: "regular" | "against-advice" | "transfer";
    status: "improved" | "recovered" | "unchanged" | "deteriorated";
}

export interface MortalityData {
    id: string;
    date: string;
    count: number;
    department: string;
    cause: string;
}

export interface EmergencyData {
    id: string;
    date: string;
    count: number;
    type: string;
    severity: "low" | "medium" | "high" | "critical";
}

export interface Department {
    id: string;
    name: string;
    code: string;
}

export interface StatsBoxData {
    title: string;
    value: number;
    change: number;
    trend: "up" | "down" | "neutral";
    icon?: React.ReactNode;
}

export interface ChartCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    id: string;
    className?: string;
    height?: number | string;
}

export interface DownloadButtonProps {
    chartId: string;
    filename: string;
}
