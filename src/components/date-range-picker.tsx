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
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function DateRangePicker() {
    const dispatch = useAppDispatch();
    const savedDateRange = useAppSelector((state) => state.dateRange);

    const [date, setDate] = useState<DateRange>({
        from: savedDateRange.from,
        to: savedDateRange.to,
    });

    useEffect(() => {
        dispatch(setDateRange(date));
    }, [date, dispatch]);

    return (
        <div className="w-full md:max-w-[300px]">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-medium",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="w-4 h-4 mr-2" />
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

                <PopoverContent className="w-full p-0" align="end">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(range) =>
                            range &&
                            setDate({
                                from: range.from,
                                to: range.to ?? undefined,
                            })
                        }
                        numberOfMonths={window.innerWidth < 640 ? 1 : 2}
                        className="p-3"
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
