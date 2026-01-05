import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import type { FieldValues, Control, Path } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup } from "../ui/radio-group"
import { RadioGroupItem } from "../ui/radio-group"




export interface FormInputProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    lable?: string,
    type?: "text" | "number",
    placeholder?: string
}


export function FormInput<T extends FieldValues>({
    control,
    name,
    lable,
    type = "text",
    placeholder
}: FormInputProps<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {lable}
                    </FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            onChange={(e) => {
                                type === 'number' ?
                                    field.onChange(Number(e.target.value)) :
                                    field.onChange(e.target.value)
                            }}
                            className="bg-input"
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />


    )
}

interface FormTextareaProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    lable?: string,

    placeholder?: string
}
export function FormTextArea<T extends FieldValues>({
    control,
    name,
    lable,
    placeholder
}: FormTextareaProps<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {lable}
                    </FormLabel>
                    <FormControl>
                        <Textarea
                            {...field}
                            placeholder={placeholder}
                            className="min-h-24 bg-input border-boder"
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />


    )
}


type Options = {
    label: string,
    value: string
}

interface FormSelectBoxProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    label?: string,
    options: Options[]
}
export function FromSelectBox<T extends FieldValues>({
    control,
    name,
    label,
    options
}: FormSelectBoxProps<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                        >
                            <SelectTrigger className="w-full bg-input border-border">
                                <SelectValue placeholder="hotel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>

                                    {
                                        options.map((item, i) => (
                                            <SelectItem value={item.value} key={i}>
                                                {item.label}
                                            </SelectItem>
                                        ))
                                    }

                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />


    )
}



interface FormCheckBoxProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    label?: string,
    options: Options[]
}

export function FormCheckBox<T extends FieldValues>({
    control,
    name,
    label,
    options
}: FormCheckBoxProps<T>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">


                            {
                                options.map((c, i) => {

                                    const checked = field.value?.includes(c.value)
                                    return < Label key={i} >
                                        <Checkbox
                                            checked={checked}
                                            onCheckedChange={(isChecked) => {
                                                if (isChecked) {
                                                    field.onChange(
                                                        [...(field.value ?? []),
                                                        c.value]
                                                    )
                                                } else {
                                                    field.onChange(
                                                        field.value.filter((v: string) => v !== c.value)
                                                    )
                                                }
                                            }}
                                            className="border-border bg-input"
                                        />
                                        {c.label}
                                    </Label>
                                })
                            }
                        </div>
                    </FormControl>
                </ FormItem>
            )}


        />


    )
}

interface FormRadiosProps<T extends FieldValues> {
    control: Control<T>,
    name: Path<T>,
    label?: string,
    options: Options[]
}

export function FormRadiosGroup<T extends FieldValues>({
    control,
    name,
    label,
    options
}: FormRadiosProps<T>) {
    return (

        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex gap-4 items-center flex-wrap"

                        >
                            {options.map((bed) => (
                                <FormItem
                                    key={bed.value}
                                    className="flex items-center bg-input p-2 rounded-md "
                                >
                                    <FormControl>
                                        <RadioGroupItem value={bed.value} className="border-border" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">{bed.label}</FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}