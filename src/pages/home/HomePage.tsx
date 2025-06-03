import { ChartAreaInteractive } from "@/components/ChartsOverview";
import FeeDetails from "@/components/FeeDetails";
import { BottomTabs } from "@/components/layout/BottomTabs";
import { Topbar } from "@/components/layout/Topbar";
import MedicalDetails from "@/components/MedicalDetails";
import MedicineTable from "@/components/MedicineTable";
import PatientOverview from "@/components/PatientOverview";
import ReportsSection from "@/components/ReportsSection";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Topbar />
            <div className="flex-1 p-2 mt-4">
                <main className="mt-14 px-2 sm:px-4 md:px-6 pb-16 sm:pb-16 md:pb-16">
                    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
                        <div className="col-span-1 sm:col-span-6 lg:col-span-4 flex flex-col h-full">
                            <PatientOverview />
                        </div>

                        <div className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col h-full">
                            <MedicalDetails />
                        </div>

                        <div className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col h-full">
                            <FeeDetails />
                        </div>

                        <div className="col-span-1 sm:col-span-6  lg:col-span-8 flex flex-col h-full mt-0 lg:-mt-3">
                            <MedicineTable />
                        </div>

                        <div className="col-span-1 sm:col-span-6 lg:col-span-4 flex flex-col h-full">
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
