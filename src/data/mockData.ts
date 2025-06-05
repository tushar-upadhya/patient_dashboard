import { generateId, getRandomInt } from "@/lib/utils";
import {
    AdmissionData,
    Department,
    DischargeData,
    EmergencyData,
    MortalityData,
} from "@/types";
import { addDays, format, subDays } from "date-fns";

// Departments
export const departments: Department[] = [
    { id: "d1", name: "Emergency", code: "ER" },
    { id: "d2", name: "Internal Medicine", code: "IM" },
    { id: "d3", name: "Surgery", code: "SUR" },
    { id: "d4", name: "Pediatrics", code: "PED" },
    { id: "d5", name: "Obstetrics & Gynecology", code: "OBG" },
    { id: "d6", name: "Cardiology", code: "CAR" },
    { id: "d7", name: "Neurology", code: "NEU" },
    { id: "d8", name: "Orthopedics", code: "ORT" },
    { id: "d9", name: "Oncology", code: "ONC" },
    { id: "d10", name: "Dermatology", code: "DER" },
    { id: "d11", name: "Urology", code: "URO" },
    { id: "d12", name: "Psychiatry", code: "PSY" },
    { id: "d13", name: "Anesthesiology", code: "ANE" },
    { id: "d14", name: "Radiology", code: "RAD" },
    { id: "d15", name: "Gastroenterology", code: "GAS" },
    { id: "d16", name: "Nephrology", code: "NEP" },
    { id: "d17", name: "Hematology", code: "HEM" },
    { id: "d18", name: "Endocrinology", code: "END" },
    { id: "d19", name: "Ophthalmology", code: "OPH" },
    { id: "d20", name: "Pulmonology", code: "PUL" },
];

// Admission types
const admissionTypes: ("emergency" | "scheduled" | "transfer")[] = [
    "emergency",
    "scheduled",
    "transfer",
];

// Discharge types
const dischargeTypes: ("regular" | "against-advice" | "transfer")[] = [
    "regular",
    "against-advice",
    "transfer",
];
const dischargeStatuses: (
    | "improved"
    | "recovered"
    | "unchanged"
    | "deteriorated"
)[] = ["improved", "recovered", "unchanged", "deteriorated"];

// Mortality causes
const mortalityCauses: string[] = [
    "Cardiac Arrest",
    "Respiratory Failure",
    "Septic Shock",
    "Stroke",
    "Multiple Organ Failure",
    "Trauma",
    "Cancer",
    "Infection",
];

// Emergency types
const emergencyTypes: string[] = [
    "Trauma",
    "Cardiac",
    "Respiratory",
    "Neurological",
    "Gastrointestinal",
    "Psychiatric",
    "Obstetric",
    "Pediatric",
];
const emergencySeverities: ("low" | "medium" | "high" | "critical")[] = [
    "low",
    "medium",
    "high",
    "critical",
];

// Generate data for the past year
const startDate = subDays(new Date(), 365);

// Helper to get a random date in the past year
const getRandomDate = (): string => {
    const randomDays = getRandomInt(0, 365);
    return format(addDays(startDate, randomDays), "yyyy-MM-dd");
};

// Helper to get a random department
const getRandomDepartment = (): Department => {
    return departments[getRandomInt(0, departments.length - 1)];
};

// Helper to get a random element from an array
const getRandomElement = <T>(array: T[]): T => {
    return array[getRandomInt(0, array.length - 1)];
};

// Generate mock admission data
export const generateMockAdmissions = (): AdmissionData[] => {
    const admissions: AdmissionData[] = [];

    // Generate 500 random admissions
    for (let i = 0; i < 500; i++) {
        const department = getRandomDepartment();

        admissions.push({
            id: generateId(),
            date: getRandomDate(),
            count: getRandomInt(1, 10),
            department: department.name,
            type: getRandomElement(admissionTypes),
        });
    }

    return admissions;
};

// Generate mock discharge data
export const generateMockDischarges = (): DischargeData[] => {
    const discharges: DischargeData[] = [];

    // Generate 450 random discharges
    for (let i = 0; i < 450; i++) {
        const department = getRandomDepartment();

        discharges.push({
            id: generateId(),
            date: getRandomDate(),
            count: getRandomInt(1, 8),
            department: department.name,
            type: getRandomElement(dischargeTypes),
            status: getRandomElement(dischargeStatuses),
        });
    }

    return discharges;
};

// Generate mock mortality data
export const generateMockMortality = (): MortalityData[] => {
    const mortality: MortalityData[] = [];

    // Generate 100 random mortality records
    for (let i = 0; i < 100; i++) {
        const department = getRandomDepartment();

        mortality.push({
            id: generateId(),
            date: getRandomDate(),
            count: getRandomInt(1, 3),
            department: department.name,
            cause: getRandomElement(mortalityCauses),
        });
    }

    return mortality;
};

// Generate mock emergency data
export const generateMockEmergencies = (): EmergencyData[] => {
    const emergencies: EmergencyData[] = [];

    // Generate 300 random emergency records
    for (let i = 0; i < 300; i++) {
        emergencies.push({
            id: generateId(),
            date: getRandomDate(),
            count: getRandomInt(1, 15),
            type: getRandomElement(emergencyTypes),
            severity: getRandomElement(emergencySeverities),
        });
    }

    return emergencies;
};

// Chart colors
export const chartColors = [
    "#8EC5FF",
    "#2B7FFF",
    "#B4DAFF",
    "#0052CC",
    "#E6F0FF",
    "#004299",
    "#CCE0FF",
    "#003380",
];
