import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredData } from "@/store/slices/hospitalDataSlice";
import { BarChart } from "@/components/charts/bar-chart";
import { ChartCard } from "@/components/ui/chart-card";
import { PieChart } from "@/components/charts/pie-chart";
import { AreaChart } from "@/components/charts/area-chart";
import { format, parseISO } from "date-fns";

export function MortalityEmergencyCharts() {
  const { mortality, emergencies } = useAppSelector(selectFilteredData);
  
  // Process data for mortality by cause
  const mortalityByCause = mortality.reduce((acc, curr) => {
    if (!acc[curr.cause]) {
      acc[curr.cause] = 0;
    }
    acc[curr.cause] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const causeData = Object.entries(mortalityByCause)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
  
  // Process data for emergency by severity
  const emergencyBySeverity = emergencies.reduce((acc, curr) => {
    if (!acc[curr.severity]) {
      acc[curr.severity] = 0;
    }
    acc[curr.severity] += curr.count;
    return acc;
  }, {} as Record<string, number>);
  
  const severityData = Object.entries(emergencyBySeverity).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));
  
  // Process data for emergency trends
  const emergenciesByMonth: Record<string, Record<string, number>> = {};
  
  emergencies.forEach((emergency) => {
    const monthYear = format(parseISO(emergency.date), 'MMM yyyy');
    
    if (!emergenciesByMonth[monthYear]) {
      emergenciesByMonth[monthYear] = {
        low: 0,
        medium: 0,
        high: 0,
        critical: 0,
      };
    }
    
    emergenciesByMonth[monthYear][emergency.severity] += emergency.count;
  });
  
  const monthlyEmergenciesData = Object.entries(emergenciesByMonth).map(([month, severities]) => ({
    month,
    low: severities.low,
    medium: severities.medium,
    high: severities.high,
    critical: severities.critical,
  })).sort((a, b) => {
    const monthA = new Date(a.month);
    const monthB = new Date(b.month);
    return monthA.getTime() - monthB.getTime();
  });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ChartCard
        title="Mortality by Cause"
        id="mortality-by-cause"
        className="lg:col-span-2"
      >
        <BarChart 
          data={causeData} 
          dataKeys={["value"]} 
          xAxisDataKey="name" 
          labels={["Count"]} 
        />
      </ChartCard>
      
      <ChartCard
        title="Emergency by Severity"
        id="emergency-by-severity"
      >
        <PieChart 
          data={severityData} 
          innerRadius={60} 
          outerRadius={90} 
          centerText={`${emergencies.length}`} 
        />
      </ChartCard>
      
      <ChartCard
        title="Emergency Trends by Severity"
        id="emergency-trends"
        className="lg:col-span-3"
      >
        <AreaChart 
          data={monthlyEmergenciesData} 
          dataKeys={["low", "medium", "high", "critical"]} 
          xAxisDataKey="month" 
          labels={["Low", "Medium", "High", "Critical"]} 
          stacked={true}
        />
      </ChartCard>
    </div>
  );
}