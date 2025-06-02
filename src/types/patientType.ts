export interface Patient {
    id: string;
    personalDetails: {
        name: string;
        age: number;
        gender: "Male" | "Female" | "Other";
        contactNumber: string;
        address: string;
        email: string;
        guardianName: string;
        avatarUrl?: string;
    };
    admissionDetails: {
        dateTime: string;
        department: string;
        ward: string;
        roomNo: string;
        admittingDoctor: string;
        reasonForAdmission: string;
    };
    dischargeDetails: {
        dateTime: string | null;
        finalDiagnosis: string | null;
        dischargingDoctor: string | null;
        remarks: string | null;
    };
    durationOfStay: {
        days: number;
        hours: number;
    } | null;
    medicineDetails: Array<{
        id: string;
        name: string;
        dosage: string;
        frequency: string;
        duration: string;
        issuedBy: string;
        startDate: string;
        endDate: string;
    }>;
    reports: Array<{
        id: string;
        name: string;
        type: string;
        uploadDate: string;
        fileUrl: string;
        uploadedBy: string;
        size: string;
    }>;
    billing: {
        consultationCharges: number;
        roomCharges: number;
        medicineCharges: number;
        testCharges: number;
        surgeryCharges: number;
        totalAmount: number;
        paymentStatus: "Paid" | "Pending" | "Partial";
        paymentMethod: string | null;
        paymentDate: string | null;
        invoice: string | null;
    };
    status: "Admitted" | "Discharged" | "Critical" | "Stable";
}

export interface PatientSummary {
    id: string;
    name: string;
    age: number;
    gender: "Male" | "Female" | "Other";
    status: "Admitted" | "Discharged" | "Critical" | "Stable";
    admissionDate: string;
    department: string;
    roomNo: string;
    doctorName: string;
}

export interface RecentActivity {
    id: string;
    patientId: string;
    patientName: string;
    activityType: "Admission" | "Discharge" | "Medicine" | "Report" | "Payment";
    description: string;
    timestamp: string;
    performedBy: string;
}

export interface Stats {
    totalPatients: number;
    admittedPatients: number;
    dischargedPatients: number;
    criticalPatients: number;
    averageStayDuration: number;
    totalRevenue: number;
    pendingPayments: number;
}
