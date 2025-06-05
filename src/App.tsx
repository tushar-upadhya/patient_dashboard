import { Overview } from "@/components/dashboard/overview";
import { DateRangePicker } from "@/components/date-range-picker";
import { Header } from "@/components/layout/header";
import { Separator } from "@/components/ui/separator";
import { store } from "@/store";
import { Provider } from "react-redux";
import Tabss from "./components/layout/Tabs";

function App() {
    return (
        <Provider store={store}>
            <div className=" bg-gray-50 container mx-auto ">
                <Header />
                <main className="py-6">
                    <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="w-full md:w-3/4">
                            <Overview />
                        </div>
                        <div className="w-full md:w-1/4 flex justify-evenly">
                            <div className="w-full max-w-[300px] sm:-mt-16">
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
