import type { ChartConfig } from "@/components/ui/chart";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import BarChartDynamic from "./charts/BarChartDynamic";

// Define interface for admission data
interface AdmissionData {
    department: string;
    admissions: number;
}

const departments = [
    "Anaesthesiology, Pain Medicine and Critical Care",
    "Anatomy",
    "Biochemistry",
    "Academic Section",
    "Biomedical Engineering",
    "Biophysics",
    "Biotechnology",
    "Biostatistics",
    "Cardiology",
    "Cardiothoracic & Vascular Surgery (CTVS)",
    "Centre for Community Medicine",
    "College of Nursing",
    "Dermatology & Venereology",
    "Dietetics",
    "Emergency Medicine",
    "Endocrinology, Metabolism & Diabetes",
    "Forensic Medicine and Toxicology",
    "Finance Division",
    "Geriatric Medicine",
    "Gastroenterology and Human Nutrition",
    "Gastrointestinal Surgery",
    "Haematology",
    "Hospital Administration",
    "Laboratory Medicine",
    "Medicine",
    "Microbiology",
    "Nephrology",
    "Nuclear Medicine",
    "Nuclear Magnetic Resonance",
    "Nursing Department",
    "Obstetrics and Gynaecology",
    "Orthopaedics",
    "Otorhinolaryngology",
    "Pediatrics",
    "Paediatric Surgery",
    "Pathology",
    "Pharmacology",
    "Physiology",
    "Physical Medicine & Rehabilitation",
    "Burns & Plastic Surgery",
    "Psychiatry",
    "Pulmonary, Critical Care and Sleep Medicine",
    "Radio Diagnosis",
    "Reproductive Biology",
    "Research Section",
    "Rheumatology",
    "Surgical Disciplines",
    "Transplant Immunology & Immunogenetics",
    "Blood Centre",
    "Main Hospital Department of Transfusion Medicine",
    "Urology",
];

const mockAdmissionData: AdmissionData[] = departments.map((dept) => ({
    department: dept,
    admissions: Math.floor(Math.random() * 50) + 10,
}));

const chartConfig: ChartConfig = {
    admissions: {
        label: "Admissions",
        color: "rgba(59, 130, 246, 0.6)",
    },
    label: {
        color: "white",
    },
};

const PatientOverview: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const defaultChartData = mockAdmissionData.slice(0, 6);

    const handleCardClick = () => {
        setIsDialogOpen(true);
    };

    return (
        <>
            <div
                className="w-full cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
                onClick={handleCardClick}
                role="button"
                aria-label="Open detailed admissions chart"
            >
                {defaultChartData.length > 0 ? (
                    <BarChartDynamic
                        data={defaultChartData}
                        yAxisKey="department"
                        xAxisKey="admissions"
                        chartConfig={chartConfig}
                        title="Admissions by Department"
                        description={`Patient admissions across departments in ${new Date().getFullYear()}`}
                        footerText={`Showing 6 of ${mockAdmissionData.length} departments • Click to view all`}
                        className="w-full"
                    />
                ) : (
                    <div className="text-center p-4 text-muted-foreground">
                        No admission data available
                    </div>
                )}
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-[90vw] sm:max-w-12xl max-h-[90vh] overflow-hidden">
                    <ScrollArea className="max-h-[60vh]">
                        <div className="h-fit">
                            {mockAdmissionData.length > 0 ? (
                                <BarChartDynamic
                                    data={mockAdmissionData}
                                    yAxisKey="department"
                                    xAxisKey="admissions"
                                    chartConfig={chartConfig}
                                    title="All Admissions by Department"
                                    description={`Complete list of patient admissions across all departments in ${new Date().getFullYear()}`}
                                    footerText={`Showing all ${mockAdmissionData.length} departments`}
                                    className="w-full "
                                />
                            ) : (
                                <div className="text-center p-4 text-muted-foreground">
                                    No admission data available
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PatientOverview;
