import SelectBoxForm from "@/components/select-box-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Edit } from "lucide-react"
import type { status } from ".."
import { DialogClose } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useUpdateBooking } from "@/hooks/use-booking"
import { Spinner } from "@/components/ui/spinner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const updateStatus = [{
  value: "PENDING",
  label: "Pending",
},
{
  value: "CONFIRMED",
  label: "Confirmed",
},
{
  value: "STAYED",
  label: "Stayed"
},
{
  value: "CANCELLED",
  label: "Cancelled",
},
{
  value: "EXPIRED",
  label: "Expired",
}]

type defaultValueProps = {
  id: string,
  selected: status
}
const UpdateBooking = ({ id, selected }: defaultValueProps) => {
  const [status, setStatus] = useState(selected)
  const { mutate, isPending } = useUpdateBooking()
  const onSubmit = () => {
    mutate({ id, status })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon-sm'}>
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Booking</DialogTitle>
          <DialogDescription>
            Make changes to booking <b>status</b> here. Click save when you're done.
          </DialogDescription>
          <Select defaultValue={status} onValueChange={(value) => setStatus(value as status)}>
            <SelectTrigger className="w-full bg-accent">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {
                updateStatus.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))
              }

            </SelectContent>
          </Select>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            form="booking-update">
            {
              isPending && <Spinner />
            }
            Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateBooking