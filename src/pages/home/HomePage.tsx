import { ChartAreaInteractive } from "@/components/ChartsOverview";
import { FeeDetails } from "@/components/FeeDetails";
import { BottomTabs } from "@/components/layout/BottomTabs";
import { Topbar } from "@/components/layout/Topbar";
import { MedicalDetails } from "@/components/MedicalDetails";
import { MedicineTable } from "@/components/MedicineTable";
import { PatientOverview } from "@/components/PatientOverview";
import { ReportsSection } from "@/components/ReportsSection";

const HomePage = () => {
    return (
        <div className="min-h-screen  flex flex-col">
            <Topbar />
            <div className="flex-1">
                <main className="mt-16 p-4 pb-24 sm:pb-20 md:pb-16">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6">
                        <div className="col-span-1 sm:col-span-6 lg:col-span-4">
                            <PatientOverview />
                        </div>
                        <div className="col-span-1 sm:col-span-3 lg:col-span-4">
                            <MedicalDetails />
                        </div>
                        <div className="col-span-1 sm:col-span-3 lg:col-span-4">
                            <FeeDetails />
                        </div>
                        <div className="col-span-1 sm:col-span-6 lg:col-span-8">
                            <MedicineTable />
                        </div>
                        <div className="col-span-1 sm:col-span-3 lg:col-span-4">
                            <ReportsSection />
                        </div>
                        <div className="col-span-1 sm:col-span-9 lg:col-span-12">
                            <ChartAreaInteractive />
                        </div>
                    </div>
                </main>
            </div>
            <BottomTabs />
        </div>
    );
};

export default HomePage;
