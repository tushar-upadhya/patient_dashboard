import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const FeeDetails: React.FC = () => {
    const { fees } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Fee Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p>
                        <strong>Room Charges:</strong> ${fees.roomCharges}
                    </p>
                    <p>
                        <strong>Medicine Charges:</strong> $
                        {fees.medicineCharges}
                    </p>
                    <p>
                        <strong>Lab Test Charges:</strong> $
                        {fees.labTestCharges}
                    </p>
                    <p>
                        <strong>Surgery Charges:</strong> ${fees.surgeryCharges}
                    </p>
                    <p>
                        <strong>Total Amount:</strong> ${fees.totalAmount}
                    </p>
                    <p>
                        <strong>Payment Status:</strong> {fees.paymentStatus}
                    </p>
                    <p>
                        <strong>Payment Mode:</strong> {fees.paymentMode}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
