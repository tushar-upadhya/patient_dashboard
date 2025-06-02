import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const FeeDetails: React.FC = () => {
    const { fees } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    if (!fees) return null; // or show loader/error

    return (
        <Card>
            <CardHeader>
                <CardTitle
                    id="fee-details-title"
                    className="text-lg text-muted-foreground"
                >
                    Fee Details
                </CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="fee-details-title">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Room Charges
                        </dt>
                        <dd className="font-medium">
                            ${fees.roomCharges.toFixed(2)}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Medicine Charges
                        </dt>
                        <dd className="font-medium">
                            ${fees.medicineCharges.toFixed(2)}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Lab Test Charges
                        </dt>
                        <dd className="font-medium">
                            ${fees.labTestCharges.toFixed(2)}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Surgery Charges
                        </dt>
                        <dd className="font-medium">
                            ${fees.surgeryCharges.toFixed(2)}
                        </dd>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <dt className="text-sm text-muted-foreground font-semibold">
                            Total Amount
                        </dt>
                        <dd className="font-bold text-primary text-lg">
                            ${fees.totalAmount.toFixed(2)}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Payment Status
                        </dt>
                        <dd
                            className={`font-medium ${
                                fees.paymentStatus === "Paid"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {fees.paymentStatus}
                        </dd>
                    </div>
                    <div>
                        <dt className="text-sm text-muted-foreground">
                            Payment Mode
                        </dt>
                        <dd className="font-medium">{fees.paymentMode}</dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
};
