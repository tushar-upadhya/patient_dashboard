import { Provider } from "react-redux";
import { store } from "./store";

import { Overview } from "./components/dashboard/overview";
import { DateRangePicker } from "./components/date-range-picker";
import { Header } from "./components/layout/header";

import { AdmissionCharts } from "./components/dashboard/admission-charts";
import { DischargeCharts } from "./components/dashboard/discharge-charts";
import { MortalityEmergencyCharts } from "./components/dashboard/mortality-emergency-charts";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsConfig = [
    {
        value: "admissions",
        label: "Admissions",
        component: <AdmissionCharts />,
    },
    {
        value: "discharges",
        label: "Discharges",
        component: <DischargeCharts />,
    },
    {
        value: "mortality-emergency",
        label: "Mortality & Emergency",
        component: <MortalityEmergencyCharts />,
    },
];

function App() {
    return (
        <Provider store={store}>
            <div className="min-h-screen bg-gray-50 container mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <main className="py-6">
                    <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="w-full md:w-3/4">
                            <Overview />
                        </div>
                        <div className="w-full md:w-1/4 flex justify-end">
                            <div className="w-full max-w-[300px]">
                                <DateRangePicker />
                            </div>
                        </div>
                    </section>
                    <Separator className="my-6" />
                    <Tabs defaultValue={tabsConfig[0].value} className="w-full">
                        <TabsList className="flex justify-start bg-gray-100 rounded-lg p-1">
                            {tabsConfig.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {tabsConfig.map((tab) => (
                            <TabsContent
                                key={tab.value}
                                value={tab.value}
                                className="mt-6"
                            >
                                {tab.component}
                            </TabsContent>
                        ))}
                    </Tabs>
                </main>
            </div>
        </Provider>
    );
}

export default App;
