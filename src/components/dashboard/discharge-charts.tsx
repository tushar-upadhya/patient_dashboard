import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredData } from "@/store/slices/hospitalDataSlice";
import { BarChart } from "@/components/charts/bar-chart";
import { ChartCard } from "@/components/ui/chart-card";
import { PieChart } from "@/components/charts/pie-chart";
import { format, parseISO } from "date-fns";
import { AreaChart } from "../charts/area-chart";

export function DischargeCharts() {
  const { discharges } = useAppSelector(selectFilteredData);
  
  // Process data for discharge by status chart
  const dischargesByStatus = discharges.reduce((acc, curr) => {
    if (!acc[curr.status]) {
      acc[curr.status] = 0;
    }
    acc[curr.status] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const statusData = Object.entries(dischargesByStatus).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
    value,
  }));
  
  // Process data for discharge by type chart
  const dischargesByType = discharges.reduce((acc, curr) => {
    if (!acc[curr.type]) {
      acc[curr.type] = 0;
    }
    acc[curr.type] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const typeData = Object.entries(dischargesByType).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
    value,
  }));
  
  // Process data for discharge trends
  const dischargesByMonth: Record<string, number> = {};
  
  discharges.forEach((discharge) => {
    const monthYear = format(parseISO(discharge.date), 'MMM yyyy');
    
    if (!dischargesByMonth[monthYear]) {
      dischargesByMonth[monthYear] = 0;
    }
    
    dischargesByMonth[monthYear] += discharge.count;
  });
  
  const monthlyDischargesData = Object.entries(dischargesByMonth).map(([month, count]) => ({
    month,
    count,
  })).sort((a, b) => {
    const monthA = new Date(a.month);
    const monthB = new Date(b.month);
    return monthA.getTime() - monthB.getTime();
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ChartCard
        title="Discharges by Status"
        id="discharges-by-status"
      >
        <PieChart 
          data={statusData} 
          innerRadius={60} 
          outerRadius={90} 
        />
      </ChartCard>
      
      <ChartCard
        title="Discharges by Type"
        id="discharges-by-type"
      >
        <PieChart 
          data={typeData} 
          innerRadius={60} 
          outerRadius={90} 
        />
      </ChartCard>
      
      <ChartCard
        title="Monthly Discharge Trends"
        id="monthly-discharge-trends"
        className="lg:col-span-3"
      >
        <AreaChart 
          data={monthlyDischargesData} 
          dataKeys={["count"]} 
          xAxisDataKey="month" 
          labels={["Discharges"]} 
        />
      </ChartCard>
    </div>
  );
}