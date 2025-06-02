import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export const MedicineTable: React.FC = () => {
    const { medicines } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    const medicinesToShow = medicines.slice(-4);

    return (
        <Card>
            <CardHeader>
                <CardTitle id="medicine-details-title">
                    Medicine Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table
                        aria-describedby="medicine-details-title"
                        className="min-w-[600px]"
                    >
                        <caption className="sr-only">
                            List of prescribed medicines with details
                        </caption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Medicine Name</TableHead>
                                <TableHead>Dosage</TableHead>
                                <TableHead>Frequency</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Prescribed By</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {medicinesToShow.length > 0 ? (
                                medicinesToShow.map((medicine) => (
                                    <TableRow key={medicine.id}>
                                        <TableCell>{medicine.name}</TableCell>
                                        <TableCell>{medicine.dosage}</TableCell>
                                        <TableCell>
                                            {medicine.frequency}
                                        </TableCell>
                                        <TableCell>
                                            {medicine.duration}
                                        </TableCell>
                                        <TableCell>
                                            {medicine.prescribedBy}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={5}
                                        className="text-center italic text-gray-500"
                                    >
                                        No medicines prescribed
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default MedicineTable;
