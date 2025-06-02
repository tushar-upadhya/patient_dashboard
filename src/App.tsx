import { ChartsOverview } from "./components/ChartsOverview";
import { FeeDetails } from "./components/FeeDetails";
import { Sidebar } from "./components/layout/Sidebar";
import { Topbar } from "./components/layout/Topbar";
import { MedicalDetails } from "./components/MedicalDetails";
import { MedicineTable } from "./components/MedicineTable";
import { PatientOverview } from "./components/PatientOverview";
import { ReportsSection } from "./components/ReportsSection";

export const App: React.FC = () => (
    <>
        <Topbar />
        <div className="flex">
            <Sidebar />
            <main className="flex-1 mt-16 p-4 lg:ml-64">
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    <PatientOverview />
                    <MedicalDetails />
                    <MedicineTable />
                    <FeeDetails />
                    <ReportsSection />
                    <ChartsOverview />
                </div>
            </main>
        </div>
    </>
);
