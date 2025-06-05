import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Provider } from "react-redux";
import { AdmissionCharts } from "./components/dashboard/admission-charts";
import { DischargeCharts } from "./components/dashboard/discharge-charts";
import { MortalityEmergencyCharts } from "./components/dashboard/mortality-emergency-charts";
import { Overview } from "./components/dashboard/overview";
import { DateRangePicker } from "./components/date-range-picker";
import { Header } from "./components/layout/header";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="min-h-screen bg-background container mx-auto">
                <Header />
                <main className="container py-6">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        <DateRangePicker />
                    </div>

                    <section className="mt-6">
                        <Overview />
                    </section>

                    <Separator className="my-6" />

                    <Tabs defaultValue="admissions" className="mt-6">
                        <TabsList>
                            <TabsTrigger value="admissions">
                                Admissions
                            </TabsTrigger>
                            <TabsTrigger value="discharges">
                                Discharges
                            </TabsTrigger>
                            <TabsTrigger value="mortality-emergency">
                                Mortality & Emergency
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="admissions" className="mt-6">
                            <AdmissionCharts />
                        </TabsContent>
                        <TabsContent value="discharges" className="mt-6">
                            <DischargeCharts />
                        </TabsContent>
                        <TabsContent
                            value="mortality-emergency"
                            className="mt-6"
                        >
                            <MortalityEmergencyCharts />
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </Provider>
    );
}

export default App;
