import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

type SelectBoxFormProps = {
    name: string,
    placeholder: string,
    defaultValue?: any
    items: {
        label: string,
        value: string
    }[],
    className?: string,
}

const SelectBoxForm = (props: SelectBoxFormProps) => {
    return (
        <Select name={props.name} defaultValue={props.defaultValue}>
            <SelectTrigger className={cn("w-45 bg-secondary text-secondary-foreground border border-border", props.className)}>
                <SelectValue placeholder={props.placeholder} />

            </SelectTrigger>
            <SelectContent>
                {
                    props.items.map((item, i) => (
                        <SelectItem
                            key={i}
                            value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))
                }


            </SelectContent>
        </Select>
    )
}

export default SelectBoxForm