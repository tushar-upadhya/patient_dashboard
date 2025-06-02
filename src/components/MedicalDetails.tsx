import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const MedicalDetails: React.FC = () => {
    const medicalDetails = useSelector(
        (state: RootState) => state.patient.medicalDetails
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle id="medical-details-title">
                    Medical Details
                </CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="medical-details-title">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    aria-label="Medical details grid"
                >
                    <section aria-labelledby="diagnoses-title">
                        <h3 id="diagnoses-title" className="font-medium mb-2">
                            Diagnoses
                        </h3>
                        <ul className="list-disc pl-5">
                            {medicalDetails.diagnoses.length > 0 ? (
                                medicalDetails.diagnoses.map((diag, idx) => (
                                    <li key={idx}>{diag}</li>
                                ))
                            ) : (
                                <li className="italic text-gray-500">
                                    No diagnoses available
                                </li>
                            )}
                        </ul>
                    </section>

                    <section aria-labelledby="treatment-plan-title">
                        <h3
                            id="treatment-plan-title"
                            className="font-medium mb-2"
                        >
                            Treatment Plan
                        </h3>
                        <p>
                            {medicalDetails.treatmentPlan || (
                                <em>No treatment plan provided</em>
                            )}
                        </p>
                    </section>

                    <section aria-labelledby="allergies-title">
                        <h3 id="allergies-title" className="font-medium mb-2">
                            Allergies
                        </h3>
                        <p>
                            {medicalDetails.allergies.length > 0 ? (
                                medicalDetails.allergies.join(", ")
                            ) : (
                                <em>No allergies reported</em>
                            )}
                        </p>
                    </section>

                    <section aria-labelledby="past-medical-history-title">
                        <h3
                            id="past-medical-history-title"
                            className="font-medium mb-2"
                        >
                            Past Medical History
                        </h3>
                        <p>
                            {medicalDetails.pastMedicalHistory.length > 0 ? (
                                medicalDetails.pastMedicalHistory.join(", ")
                            ) : (
                                <em>No past medical history</em>
                            )}
                        </p>
                    </section>
                </div>
            </CardContent>
        </Card>
    );
};
