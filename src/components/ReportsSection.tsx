import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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

    const reportsToShow = reports.slice(0, 3);

    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-lg sm:text-lg text-muted-foreground">
                    Medical Reports
                </CardTitle>
            </CardHeader>
            <CardContent
                aria-labelledby="reports-section-title"
                className="space-y-4"
            >
                {reportsToShow.length === 0 ? (
                    <p className="italic text-gray-500 text-center">
                        No medical reports available.
                    </p>
                ) : (
                    <div className="overflow-x-auto">
                        <Table className="min-w-[600px]">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">
                                        Report Type
                                    </TableHead>
                                    <TableHead className="">Date</TableHead>
                                    <TableHead className="">
                                        Description
                                    </TableHead>
                                    <TableHead className="">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reportsToShow.map((report) => (
                                    <TableRow
                                        key={report.id}
                                        className="hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <TableCell>{report.type}</TableCell>
                                        <TableCell>
                                            {formatDate(report.date)}
                                        </TableCell>
                                        <TableCell>
                                            {report.description}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex space-x-2">
                                                <Button
                                                    size="sm"
                                                    className=" text-white"
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className=" hover:bg-blue-50"
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
            </CardContent>
        </Card>
    );
};
