import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parse, isValid } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, formatStr = 'PPP'): string {
  let dateObj: Date;
  
  if (typeof date === 'string') {
    dateObj = new Date(date);
  } else {
    dateObj = date;
  }
  
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  
  return format(dateObj, formatStr);
}

export function downloadChartAsPNG(chartId: string, filename: string): void {
  try {
    const chartElement = document.getElementById(chartId);
    if (!chartElement) {
      console.error(`Chart element with ID "${chartId}" not found`);
      return;
    }

    // Use html2canvas or another library in a real implementation
    console.log(`Chart with ID "${chartId}" would be downloaded as "${filename}.png"`);
    
    // Mock download functionality for now
    alert(`Chart "${filename}" would be downloaded as PNG in a real implementation`);
  } catch (error) {
    console.error('Failed to download chart:', error);
  }
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}