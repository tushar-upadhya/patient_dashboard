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
                <CardTitle id="fee-details-title">Fee Details</CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="fee-details-title">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p>
                        <strong>Room Charges:</strong> $
                        {fees.roomCharges.toFixed(2)}
                    </p>
                    <p>
                        <strong>Medicine Charges:</strong> $
                        {fees.medicineCharges.toFixed(2)}
                    </p>
                    <p>
                        <strong>Lab Test Charges:</strong> $
                        {fees.labTestCharges.toFixed(2)}
                    </p>
                    <p>
                        <strong>Surgery Charges:</strong> $
                        {fees.surgeryCharges.toFixed(2)}
                    </p>
                    <p className="font-semibold">
                        <strong>Total Amount:</strong> $
                        {fees.totalAmount.toFixed(2)}
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
