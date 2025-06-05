import { BarChart } from "@/components/charts/bar-chart";
import { PieChart } from "@/components/charts/pie-chart";
import { ChartCard } from "@/components/ui/chart-card";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredData } from "@/store/slices/hospitalDataSlice";
import { format, parseISO } from "date-fns";
import { useState } from "react"; // 🆕
import { ScrollArea } from "../ui/scroll-area";

export function AdmissionCharts() {
    const { admissions } = useAppSelector(selectFilteredData);

    // 🆕 Track selected department
    const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
        null
    );

    // Handle bar click to set department
    const handleBarClick = (data: any) => {
        setSelectedDepartment(
            data?.name === selectedDepartment ? null : data?.name
        );
    };

    const admissionsByDepartment = admissions.reduce((acc, curr) => {
        if (!acc[curr.department]) acc[curr.department] = 0;
        acc[curr.department] += curr.count;
        return acc;
    }, {} as Record<string, number>);

    const departmentData = Object.entries(admissionsByDepartment)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

    // 🧠 Filter admissions by selected department for PieChart
    const filteredAdmissions = selectedDepartment
        ? admissions.filter((a) => a.department === selectedDepartment)
        : admissions;

    const admissionsByType = filteredAdmissions.reduce((acc, curr) => {
        if (!acc[curr.type]) acc[curr.type] = 0;
        acc[curr.type] += curr.count;
        return acc;
    }, {} as Record<string, number>);

    const typeData = Object.entries(admissionsByType).map(([name, value]) => ({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        value,
    }));

    const admissionsByMonth: Record<string, Record<string, number>> = {};

    admissions.forEach((admission) => {
        const monthYear = format(parseISO(admission.date), "MMM yyyy");
        if (!admissionsByMonth[monthYear]) {
            admissionsByMonth[monthYear] = {
                emergency: 0,
                scheduled: 0,
                transfer: 0,
            };
        }
        admissionsByMonth[monthYear][admission.type] += admission.count;
    });

    const monthlyAdmissionsData = Object.entries(admissionsByMonth)
        .map(([month, types]) => ({
            month,
            emergency: types.emergency,
            scheduled: types.scheduled,
            transfer: types.transfer,
        }))
        .sort(
            (a, b) => new Date(a.month).getTime() - new Date(b.month).getTime()
        );

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ChartCard
                title="Admissions by Department"
                id="admissions-by-department"
                className="lg:col-span-2"
            >
                <ScrollArea className="w-full rounded-e-md whitespace-nowrap">
                    <BarChart
                        data={departmentData}
                        dataKeys={["value"]}
                        xAxisDataKey="name"
                        labels={["Count"]}
                        onClickBar={handleBarClick}
                    />
                </ScrollArea>
            </ChartCard>

            <ChartCard
                title={`Admissions by Type${
                    selectedDepartment ? `: ${selectedDepartment}` : ""
                }`}
                id="admissions-by-type"
            >
                <PieChart
                    data={typeData}
                    innerRadius={60}
                    outerRadius={90}
                    centerText={`${filteredAdmissions.length}`}
                />
            </ChartCard>

            <ChartCard
                title="Monthly Admission Trends"
                id="monthly-admission-trends"
                className="lg:col-span-3"
            >
                <BarChart
                    data={monthlyAdmissionsData}
                    dataKeys={["emergency", "scheduled", "transfer"]}
                    xAxisDataKey="month"
                    labels={["Emergency", "Scheduled", "Transfer"]}
                />
            </ChartCard>
        </div>
    );
}
