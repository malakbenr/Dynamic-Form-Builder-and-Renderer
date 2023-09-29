import React from 'react';
import { cn } from "../lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Label } from './ui/label';
const CalendarI = (props: {type: string, color?: string}) => {

    const [date, setDate] = React.useState<Date>();

    function handleOnDrag(e: any) {
    e.dataTransfer.setData("idComponent", e.target.id);
    }
     
  return (
    <div id={props.type} className="flex flex-col space-y-1.5" draggable onDragStart={e => handleOnDrag(e)}>
        <Label htmlFor="number" className={props.color}>Calendar</Label>
        <Popover>
            <PopoverTrigger asChild>
            <Button
                variant={"outline"}
                className={cn(
                "w-auto justify-start text-left font-normal",
                !date && "text-muted-foreground"
                )}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
            />
            </PopoverContent>
        </Popover>
        </div>
  )
}

export default CalendarI;