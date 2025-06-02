import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const calculateStayDuration = (
    admit: string,
    discharge: string
): string => {
    const admitDate = new Date(admit);
    const dischargeDate = new Date(discharge);
    const diff = dischargeDate.getTime() - admitDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days} days`;
};
