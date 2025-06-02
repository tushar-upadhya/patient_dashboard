import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area"; // Import ScrollArea from shadcn/ui
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export const MedicineTable: React.FC = () => {
    const medicines = useSelector(
        (state: { patient: PatientState }) => state.patient.medicines
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle id="medicine-details-title">
                    Medicine Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-52 w-full">
                    <div className="overflow-x-auto min-w-[600px]">
                        <Table aria-describedby="medicine-details-title">
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
                                {medicines.length > 0 ? (
                                    medicines.map((medicine) => (
                                        <TableRow key={medicine.id}>
                                            <TableCell>
                                                {medicine.name}
                                            </TableCell>
                                            <TableCell>
                                                {medicine.dosage}
                                            </TableCell>
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
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
