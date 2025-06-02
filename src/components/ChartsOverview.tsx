import type { PatientState } from "@/types/patient";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

ChartJS.register(
    LineElement,
    BarElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
);

export const ChartsOverview: React.FC = () => {
    const { vitals, fees } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    const vitalsData = {
        labels: vitals.map((v) => v.date),
        datasets: [
            {
                label: "Heart Rate",
                data: vitals.map((v) => v.heartRate),
                borderColor: "#3b82f6",
                fill: false,
            },
            {
                label: "Temperature",
                data: vitals.map((v) => v.temperature),
                borderColor: "#ef4444",
                fill: false,
            },
        ],
    };

    const feeData = {
        labels: ["Room", "Medicine", "Lab Tests", "Surgery"],
        datasets: [
            {
                data: [
                    fees.roomCharges,
                    fees.medicineCharges,
                    fees.labTestCharges,
                    fees.surgeryCharges,
                ],
                backgroundColor: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b"],
            },
        ],
    };

    const stayData = {
        labels: ["Patient 1", "Patient 2"],
        datasets: [
            {
                label: "Stay Duration (Days)",
                data: [3, 5],
                backgroundColor: "#3b82f6",
            },
        ],
    };

    const chartOptions = { responsive: true, maintainAspectRatio: false };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Charts Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="h-64">
                        <h3 className="font-medium mb-2">Vital Signs</h3>
                        <Line data={vitalsData} options={chartOptions} />
                    </div>
                    <div className="h-64">
                        <h3 className="font-medium mb-2">Fee Breakdown</h3>
                        <Pie data={feeData} options={chartOptions} />
                    </div>
                    <div className="h-64">
                        <h3 className="font-medium mb-2">Stay Duration</h3>
                        <Bar data={stayData} options={chartOptions} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
