import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FeeDetails: React.FC = () => {
    const { fees } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    if (!fees) return null;

    const feeItems = [
        { label: "Room Charges", value: `$${fees.roomCharges.toFixed(2)}` },
        {
            label: "Medicine Charges",
            value: `$${fees.medicineCharges.toFixed(2)}`,
        },
        {
            label: "Lab Test Charges",
            value: `$${fees.labTestCharges.toFixed(2)}`,
        },
        {
            label: "Surgery Charges",
            value: `$${fees.surgeryCharges.toFixed(2)}`,
        },
        {
            label: "Payment Status",
            value: fees.paymentStatus,
            valueClass:
                fees.paymentStatus === "Paid"
                    ? "text-green-600"
                    : fees.paymentStatus === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600",
        },
        { label: "Payment Mode", value: fees.paymentMode },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">
                    Fee Details
                </CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="fee-details-title">
                <dl className="grid grid-cols-2 gap-4">
                    {feeItems.map(({ label, value, valueClass }, idx) => (
                        <div key={idx}>
                            <dt className="text-sm text-muted-foreground">
                                {label}
                            </dt>
                            <dd className={`font-medium ${valueClass || ""}`}>
                                {value}
                            </dd>
                        </div>
                    ))}

                    {/* Total amount spans two columns */}
                    <div className="col-span-2">
                        <dt className="text-sm text-muted-foreground font-semibold">
                            Total Amount
                        </dt>
                        <dd className="font-bold text-primary text-lg">
                            ${fees.totalAmount.toFixed(2)}
                        </dd>
                    </div>
                </dl>
            </CardContent>
        </Card>
    );
};

export default FeeDetails;
