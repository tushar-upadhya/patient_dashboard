import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFilteredData } from "@/store/slices/hospitalDataSlice";
import { format, parseISO } from "date-fns";
import { groupBy } from "lodash";
import { StatsBox } from "@/components/ui/stats-box";
import { UsersIcon, UserMinus, Skull, StethoscopeIcon } from "lucide-react";

export function Overview() {
  const { admissions, discharges, mortality, emergencies } = useAppSelector(selectFilteredData);
  
  // Calculate totals
  const totalAdmissions = admissions.reduce((sum, item) => sum + item.count, 0);
  const totalDischarges = discharges.reduce((sum, item) => sum + item.count, 0);
  const totalMortality = mortality.reduce((sum, item) => sum + item.count, 0);
  const totalEmergencies = emergencies.reduce((sum, item) => sum + item.count, 0);
  
  // Calculate trends (mock calculations - in a real app these would compare to previous period)
  const admissionTrend = 5.3;
  const dischargeTrend = 3.7;
  const mortalityTrend = -2.1;
  const emergencyTrend = 8.4;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsBox
        title="Total Admissions"
        value={totalAdmissions}
        change={admissionTrend}
        trend="up"
        icon={<UsersIcon className="h-4 w-4" />}
      />
      <StatsBox
        title="Total Discharges"
        value={totalDischarges}
        change={dischargeTrend}
        trend="up"
        icon={<UserMinus className="h-4 w-4" />}
      />
      <StatsBox
        title="Mortality"
        value={totalMortality}
        change={mortalityTrend}
        trend="down"
        icon={<Skull className="h-4 w-4" />}
      />
      <StatsBox
        title="Emergency Cases"
        value={totalEmergencies}
        change={emergencyTrend}
        trend="up"
        icon={<StethoscopeIcon className="h-4 w-4" />}
      />
    </div>
  );
}