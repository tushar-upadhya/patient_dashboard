import clsx from "clsx";
import { AdmissionCharts } from "../dashboard/admission-charts";
import { DischargeCharts } from "../dashboard/discharge-charts";
import { MortalityEmergencyCharts } from "../dashboard/mortality-emergency-charts";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

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

const Tabss = () => {
    return (
        <Tabs defaultValue={tabsConfig[0].value} className="w-full">
            <TabsList className="bg-[#8EC5FF]/10 flex justify-start relative">
                {/* Scrollable tabs for small and medium screens */}
                <ScrollArea className={clsx("w-full lg:hidden")}>
                    <div className="flex w-max space-x-2 p-1 min-w-[600px]">
                        {tabsConfig.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:font-semibold flex-shrink-0 relative transition-all duration-200 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2B7FFF] after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform duration-200 ease-in-out"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </div>
                    <ScrollBar
                        orientation="horizontal"
                        className="h-1 bg-gray-300/50 hover:bg-gray-400/50 transition-colors"
                    />
                </ScrollArea>

                <div className="hidden lg:flex space-x-2 p-1">
                    {tabsConfig.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="px-4 py-2 text-sm rounded-md data-[state=active]:bg-white data-[state=active]:font-semibold relative transition-all duration-200 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#2B7FFF] after:scale-x-0"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </div>
            </TabsList>

            {tabsConfig.map((tab) => (
                <TabsContent
                    key={tab.value}
                    value={tab.value}
                    className="mt-6 data-[state=active]:animate-tab-content"
                >
                    {tab.component}
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default Tabss;
