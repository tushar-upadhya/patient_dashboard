import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredData } from "@/store/slices/hospitalDataSlice";
import { BarChart } from "@/components/charts/bar-chart";
import { ChartCard } from "@/components/ui/chart-card";
import { PieChart } from "@/components/charts/pie-chart";
import { format, parseISO } from "date-fns";

export function AdmissionCharts() {
  const { admissions } = useAppSelector(selectFilteredData);
  
  // Process data for admission by department chart
  const admissionsByDepartment = admissions.reduce((acc, curr) => {
    if (!acc[curr.department]) {
      acc[curr.department] = 0;
    }
    acc[curr.department] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const departmentData = Object.entries(admissionsByDepartment).map(([name, value]) => ({
    name,
    value,
  })).sort((a, b) => b.value - a.value);
  
  // Process data for admission by type chart
  const admissionsByType = admissions.reduce((acc, curr) => {
    if (!acc[curr.type]) {
      acc[curr.type] = 0;
    }
    acc[curr.type] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const typeData = Object.entries(admissionsByType).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));
  
  // Process data for admission trends
  const admissionsByMonth: Record<string, Record<string, number>> = {};
  
  admissions.forEach((admission) => {
    const monthYear = format(parseISO(admission.date), 'MMM yyyy');
    
    if (!admissionsByMonth[monthYear]) {
      admissionsByMonth[monthYear] = {
        emergency: 0,
        scheduled: 0,
        transfer: 0,
      };
    }
    
    admissionsByMonth[monthYear][admission.type] += admission.count;
  });
  
  const monthlyAdmissionsData = Object.entries(admissionsByMonth).map(([month, types]) => ({
    month,
    emergency: types.emergency,
    scheduled: types.scheduled,
    transfer: types.transfer,
  })).sort((a, b) => {
    const monthA = new Date(a.month);
    const monthB = new Date(b.month);
    return monthA.getTime() - monthB.getTime();
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ChartCard
        title="Admissions by Department"
        id="admissions-by-department"
        className="lg:col-span-2"
      >
        <BarChart 
          data={departmentData} 
          dataKeys={["value"]} 
          xAxisDataKey="name" 
          labels={["Count"]} 
        />
      </ChartCard>
      
      <ChartCard
        title="Admissions by Type"
        id="admissions-by-type"
      >
        <PieChart 
          data={typeData} 
          innerRadius={60} 
          outerRadius={90} 
          centerText={`${admissions.length}`} 
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