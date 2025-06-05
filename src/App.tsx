import { Overview } from "@/components/dashboard/overview";
import { DateRangePicker } from "@/components/date-range-picker";
import { Header } from "@/components/layout/header";
import Tabss from "@/components/layout/Tabs";
import { Separator } from "@/components/ui/separator";
import { store } from "@/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="min-h-screen bg-gray-50 container mx-auto px-4 sm:px-6 lg:px-8">
                <Header />
                <main className="py-6">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="col-span-1 md:col-span-2 lg:col-span-3">
                            <Overview />
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
                            <div className="w-full md:w-full lg:w-auto max-w-full sm:max-w-sm md:max-w-full lg:max-w-sm">
                                <DateRangePicker />
                            </div>
                        </div>
                    </section>
                    <Separator className="my-6" />
                    <Tabss />
                </main>
            </div>
        </Provider>
    );
}

export default App;
