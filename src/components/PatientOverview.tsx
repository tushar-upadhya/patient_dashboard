import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateStayDuration } from "@/lib/utils";
import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";

const formatDate = (date: string) =>
    new Date(date).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

interface InfoRowProps {
    label: string;
    value: React.ReactNode;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
    <p className="flex justify-baseline">
        <span className="font-medium w-24 text-left">{label}</span>
        <span className="text-muted-foreground">{value}</span>
    </p>
);

const PatientOverview: React.FC = () => {
    const { profile } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    const leftColumn = [
        { label: "Name:", value: profile.name },
        { label: "Age:", value: profile.age },
        {
            label: "Gender:",
            value: <span className="capitalize">{profile.gender}</span>,
        },
        { label: "Patient ID:", value: profile.patientId },
    ];

    const rightColumn = [
        { label: "Admit Date:", value: formatDate(profile.admitDate) },
        {
            label: "Discharge Date:",
            value: profile.dischargeDate
                ? formatDate(profile.dischargeDate)
                : "N/A",
        },
        {
            label: "Duration of Stay:",
            value: calculateStayDuration(
                profile.admitDate,
                profile.dischargeDate
            ),
        },
        {
            label: "Status:",
            value: <span className="capitalize">{profile.status}</span>,
        },
    ];

    return (
        <Card className="w-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-base text-muted-foreground">
                    Patient Overview
                </CardTitle>
            </CardHeader>
            <CardContent className="px-3 py-3 sm:px-4 sm:py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-sm text-gray-800">
                    <div className="space-y-2">
                        {leftColumn.map(({ label, value }) => (
                            <InfoRow key={label} label={label} value={value} />
                        ))}
                    </div>
                    <div className="space-y-2">
                        {rightColumn.map(({ label, value }) => (
                            <InfoRow key={label} label={label} value={value} />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PatientOverview;
