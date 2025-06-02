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

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    // Limit to first 3 reports
    const reportsToShow = reports.slice(0, 3);

    return (
        <Card>
            <CardHeader>
                <CardTitle id="reports-section-title">
                    Medical Reports
                </CardTitle>
            </CardHeader>
            <CardContent aria-labelledby="reports-section-title">
                <div className="space-y-4">
                    <label htmlFor="report-upload" className="sr-only">
                        Upload medical report
                    </label>
                    <Input
                        id="report-upload"
                        type="file"
                        accept=".pdf,.jpg,.png"
                        className="mb-4"
                    />

                    {reportsToShow.length === 0 ? (
                        <p className="italic text-gray-500">
                            No medical reports available.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table className="min-w-[600px]">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Report Type</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {reportsToShow.map((report) => (
                                        <TableRow key={report.id}>
                                            <TableCell>{report.type}</TableCell>
                                            <TableCell>
                                                {formatDate(report.date)}
                                            </TableCell>
                                            <TableCell>
                                                {report.description}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex space-x-2">
                                                    <Button size="sm">
                                                        View
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                    >
                                                        Download
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
