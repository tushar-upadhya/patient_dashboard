import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

export const ReportsSection: React.FC = () => {
    const { reports } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Medical Reports</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        className="mb-4"
                    />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Report Type</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {reports.map((report) => (
                                <TableRow key={report.id}>
                                    <TableCell>{report.type}</TableCell>
                                    <TableCell>{report.date}</TableCell>
                                    <TableCell>{report.description}</TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <Button size="sm">View</Button>
                                            <Button size="sm" variant="outline">
                                                Download
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};
