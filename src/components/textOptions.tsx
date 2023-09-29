import React from 'react';
import { cn } from "../lib/utils";
import frameworks from '../utils/textOptionsList';
import { Label } from './ui/label';
import { Button } from './ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

const TextOptions = (props: {type: string, color?: string}) => {

    function handleOnDrag(e: any) {
    e.dataTransfer.setData("idComponent", e.target.id);
    }
     
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

  return (
    <div id={props.type} className="flex flex-col space-y-1.5" draggable onDragStart={e => handleOnDrag(e)}>
        <Label htmlFor="text-options" className={props.color}>Text options list</Label>
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-auto justify-between"
            >
            {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Select framework..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
            <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
                {frameworks.map((framework) => (
                <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    }}
                >
                    {framework.label}
                    <CheckIcon
                    className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                    />
                </CommandItem>
                ))}
            </CommandGroup>
            </Command>
        </PopoverContent>
        </Popover>
    </div>
  )
}

export default TextOptions;