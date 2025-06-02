import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const MedicalSection: React.FC<SectionProps> = ({ id, title, children }) => (
    <section aria-labelledby={id}>
        <h3
            id={id}
            className="text-sm font-semibold text-muted-foreground mb-1"
        >
            {title}
        </h3>
        <div className="text-sm">{children}</div>
    </section>
);

const MedicalDetails: React.FC = () => {
    const medicalDetails = useSelector(
        (state: RootState) => state.patient.medicalDetails
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">
                    Medical Details
                </CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="medical-details-title">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    aria-label="Medical details grid"
                >
                    <MedicalSection id="diagnoses-title" title="Diagnoses">
                        {medicalDetails.diagnoses.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {medicalDetails.diagnoses.map((diag, idx) => (
                                    <li key={idx}>{diag}</li>
                                ))}
                            </ul>
                        ) : (
                            <em className="italic text-gray-500">
                                No diagnoses available
                            </em>
                        )}
                    </MedicalSection>

                    <MedicalSection
                        id="treatment-plan-title"
                        title="Treatment Plan"
                    >
                        {medicalDetails.treatmentPlan ? (
                            medicalDetails.treatmentPlan
                        ) : (
                            <em className="text-gray-500">
                                No treatment plan provided
                            </em>
                        )}
                    </MedicalSection>

                    <MedicalSection id="allergies-title" title="Allergies">
                        {medicalDetails.allergies.length > 0 ? (
                            medicalDetails.allergies.join(", ")
                        ) : (
                            <em className="text-gray-500">
                                No allergies reported
                            </em>
                        )}
                    </MedicalSection>

                    <MedicalSection
                        id="past-medical-history-title"
                        title="Past Medical History"
                    >
                        {medicalDetails.pastMedicalHistory.length > 0 ? (
                            medicalDetails.pastMedicalHistory.join(", ")
                        ) : (
                            <em className="text-gray-500">
                                No past medical history
                            </em>
                        )}
                    </MedicalSection>
                </div>
            </CardContent>
        </Card>
    );
};

export default MedicalDetails;
