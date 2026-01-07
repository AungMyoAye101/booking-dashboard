import { type DateRange } from "react-day-picker"
import type { Dispatch, SetStateAction } from "react"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"

type DateRangeProps = {
    date: DateRange | undefined,
    setDate: Dispatch<SetStateAction<DateRange | undefined>>
}

const DateRangePicker = ({ date, setDate }: DateRangeProps) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="bg-secondary text-muted-foreground border border-border rounded-md text-sm p-2">
                    Select checkIn & Chechkout date
                </div>

            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    className="rounded-lg border shadow-sm"
                />
            </PopoverContent>

        </Popover>

    )
}

export default DateRangePicker
