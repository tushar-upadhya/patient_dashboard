import { createSlice } from "@reduxjs/toolkit";
import type { PatientState } from "../types/patient";

const initialState: PatientState = {
    profile: {
        name: "John Doe",
        age: 45,
        gender: "Male",
        patientId: "P12345",
        profilePic: "https://via.placeholder.com/64",
        admitDate: "2025-05-28T10:00:00",
        dischargeDate: "2025-06-01T15:00:00",
        status: "Discharged",
    },
    medicalDetails: {
        diagnoses: ["Hypertension", "Type 2 Diabetes"],
        treatmentPlan: "Medication and lifestyle changes",
        allergies: ["Penicillin"],
        pastMedicalHistory: ["Appendectomy (2015)"],
    },
    medicines: [
        {
            id: 1,
            name: "Amlodipine",
            dosage: "5mg",
            frequency: "Daily",
            duration: "30 days",
            prescribedBy: "Dr. Smith",
        },
        {
            id: 2,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
        {
            id: 3,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
        {
            id: 4,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
        {
            id: 4,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
        {
            id: 4,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
        {
            id: 5,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice Daily",
            duration: "60 days",
            prescribedBy: "Dr. Jones",
        },
    ],
    fees: {
        roomCharges: 1500,
        medicineCharges: 300,
        labTestCharges: 200,
        surgeryCharges: 0,
        totalAmount: 2000,
        paymentStatus: "Paid",
        paymentMode: "Insurance",
    },
    reports: [
        {
            id: 1,
            type: "Blood Test",
            date: "2025-05-29",
            description: "CBC Report",
        },
        {
            id: 2,
            type: "X-Ray",
            date: "2025-05-30",
            description: "Chest X-Ray",
        },
    ],
    vitals: [
        { date: "2025-05-28", bp: "120/80", heartRate: 72, temperature: 98.6 },
        { date: "2025-05-29", bp: "118/78", heartRate: 70, temperature: 98.4 },
    ],
};

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {},
});

export default patientSlice.reducer;
