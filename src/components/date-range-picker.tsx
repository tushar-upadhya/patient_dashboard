import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { cn } from "@/lib/utils";
import { setDateRange } from "@/store/slices/dateRangeSlice";
import { DateRange } from "@/types";
import { addMonths, format, subDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function DateRangePicker() {
    const dispatch = useAppDispatch();
    const savedDateRange = useAppSelector((state) => state.dateRange);

    const [date, setDate] = useState<DateRange>({
        from: savedDateRange.from,
        to: savedDateRange.to,
    });

    // Update the Redux store when the date range changes
    useEffect(() => {
        dispatch(setDateRange(date));
    }, [date, dispatch]);

    const quickSelects = [
        {
            name: "Last 7 Days",
            onClick: () =>
                setDate({
                    from: subDays(new Date(), 7),
                    to: new Date(),
                }),
        },
        {
            name: "Last 30 Days",
            onClick: () =>
                setDate({
                    from: addMonths(new Date(), -1),
                    to: new Date(),
                }),
        },
        {
            name: "Last 90 Days",
            onClick: () =>
                setDate({
                    from: addMonths(new Date(), -3),
                    to: new Date(),
                }),
        },
        {
            name: "Last Year",
            onClick: () =>
                setDate({
                    from: addMonths(new Date(), -12),
                    to: new Date(),
                }),
        },
    ];

    return (
        <div className="grid gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal md:w-[300px]",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date range</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <div className="flex flex-col sm:flex-row">
                        <div className="border-r p-2">
                            <div className="px-3 py-2 font-medium">
                                Quick Select
                            </div>
                            <div className="grid gap-1 p-2">
                                {quickSelects.map((item) => (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        className="justify-start font-normal"
                                        onClick={item.onClick}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={(range) => {
                                if (range) setDate(range);
                            }}
                            numberOfMonths={2}
                            className="p-3"
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
