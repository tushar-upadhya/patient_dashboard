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

    return (
        <Card>
            <CardHeader>
                <CardTitle>Medicine Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
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
                        {medicines.map((medicine) => (
                            <TableRow key={medicine.id}>
                                <TableCell>{medicine.name}</TableCell>
                                <TableCell>{medicine.dosage}</TableCell>
                                <TableCell>{medicine.frequency}</TableCell>
                                <TableCell>{medicine.duration}</TableCell>
                                <TableCell>{medicine.prescribedBy}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
