import {
    departments,
    generateMockAdmissions,
    generateMockDischarges,
    generateMockEmergencies,
    generateMockMortality,
} from "@/data/mockData";
import { RootState } from "@/store";
import {
    AdmissionData,
    Department,
    DischargeData,
    EmergencyData,
    MortalityData,
} from "@/types";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { isWithinInterval, parseISO } from "date-fns";

interface HospitalDataState {
    admissions: AdmissionData[];
    discharges: DischargeData[];
    mortality: MortalityData[];
    emergencies: EmergencyData[];
    departments: Department[];
    isLoading: boolean;
    error: string | null;
}

const initialState: HospitalDataState = {
    admissions: generateMockAdmissions(),
    discharges: generateMockDischarges(),
    mortality: generateMockMortality(),
    emergencies: generateMockEmergencies(),
    departments,
    isLoading: false,
    error: null,
};

const hospitalDataSlice = createSlice({
    name: "hospitalData",
    initialState,
    reducers: {
        refreshData: (state) => {
            state.admissions = generateMockAdmissions();
            state.discharges = generateMockDischarges();
            state.mortality = generateMockMortality();
            state.emergencies = generateMockEmergencies();
        },
    },
});

// Selectors
export const selectFilteredData = createSelector(
    [
        (state: RootState) => state.hospitalData,
        (state: RootState) => state.dateRange,
    ],
    (hospitalData, dateRange) => {
        const { from, to } = dateRange;

        if (!from || !to) {
            return hospitalData;
        }

        const filterByDateRange = <T extends { date: string }>(
            items: T[]
        ): T[] => {
            return items.filter((item) => {
                const itemDate = parseISO(item.date);
                return isWithinInterval(itemDate, { start: from, end: to });
            });
        };

        return {
            ...hospitalData,
            admissions: filterByDateRange(hospitalData.admissions),
            discharges: filterByDateRange(hospitalData.discharges),
            mortality: filterByDateRange(hospitalData.mortality),
            emergencies: filterByDateRange(hospitalData.emergencies),
        };
    }
);

export const { refreshData } = hospitalDataSlice.actions;

export default hospitalDataSlice.reducer;
