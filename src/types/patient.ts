export interface PatientProfile {
    name: string;
    age: number;
    gender: string;
    patientId: string;
    profilePic: string;
    admitDate: string;
    dischargeDate: string;
    status: "Admitted" | "Discharged";
}

export interface MedicalDetails {
    diagnoses: string[];
    treatmentPlan: string;
    allergies: string[];
    pastMedicalHistory: string[];
}

export interface Medicine {
    id: number;
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    prescribedBy: string;
}

export interface FeeDetails {
    roomCharges: number;
    medicineCharges: number;
    labTestCharges: number;
    surgeryCharges: number;
    totalAmount: number;
    paymentStatus: "Paid" | "Pending";
    paymentMode: "Cash" | "Card" | "Insurance";
}

export interface Report {
    id: number;
    type: string;
    date: string;
    description: string;
}

export interface Vital {
    date: string;
    bp: string;
    heartRate: number;
    temperature: number;
}

export interface PatientState {
    profile: PatientProfile;
    medicalDetails: MedicalDetails;
    medicines: Medicine[];
    fees: FeeDetails;
    reports: Report[];
    vitals: Vital[];
}
