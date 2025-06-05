import { clsx, type ClassValue } from "clsx";
import { format, isValid } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, formatStr = "PPP"): string {
    let dateObj: Date;

    if (typeof date === "string") {
        dateObj = new Date(date);
    } else {
        dateObj = date;
    }

    if (!isValid(dateObj)) {
        return "Invalid date";
    }

    return format(dateObj, formatStr);
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateId = (): string => {
    return Math.random().toString(36).substring(2, 9);
};

export function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
}
