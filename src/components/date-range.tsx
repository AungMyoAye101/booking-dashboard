import { type DateRange } from "react-day-picker"
import type { Dispatch, SetStateAction } from "react"

import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent } from "./ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Input } from "./ui/input"

type DateRangeProps = {
    date: DateRange | undefined,
    setDate: Dispatch<SetStateAction<DateRange | undefined>>
}

const DateRangePicker = ({ date, setDate }: DateRangeProps) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex border border-border rounded-lg ">
                    <Input
                        disabled
                        value={date?.from
                            ? date.from.toLocaleDateString()
                            : undefined}
                        placeholder="CheckIn"
                        className=" bg-secondary text-secondary-foreground "
                    />
                    <Input
                        disabled
                        value={date?.to
                            ? date.to.toLocaleDateString()
                            : undefined}
                        placeholder="CheckOut"
                        className=" bg-secondary text-secondary-foreground "
                    />

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
