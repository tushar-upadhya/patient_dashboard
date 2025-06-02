import { ChartAreaInteractive } from "@/components/ChartsOverview";
import { FeeDetails } from "@/components/FeeDetails";
import { BottomTabs } from "@/components/layout/BottomTabs";
import { Topbar } from "@/components/layout/Topbar";
import { MedicalDetails } from "@/components/MedicalDetails";
import { MedicineTable } from "@/components/MedicineTable";
import PatientOverview from "@/components/PatientOverview";
import { ReportsSection } from "@/components/ReportsSection";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Topbar />
            <div className="flex-1 p-4">
                <main className="mt-16 px-4 sm:px-6 md:px-8 pb-24 sm:pb-20 md:pb-16">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
                        <div className="col-span-1 sm:col-span-6 lg:col-span-4 flex flex-col h-full">
                            <PatientOverview />
                        </div>

                        <div className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col h-full">
                            <MedicalDetails />
                        </div>

                        <div className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col h-full">
                            <FeeDetails />
                        </div>

                        <div className="col-span-1 sm:col-span-6 lg:col-span-8 flex flex-col h-full mt-0 lg:-mt-16">
                            <MedicineTable />
                        </div>

                        <div className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col h-full">
                            <ReportsSection />
                        </div>

                        <div className="col-span-1 sm:col-span-6 lg:col-span-12 flex flex-col h-full">
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
