import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Edit, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ImageUpload from "./image-upload";
import HotelDelete from "./hotel-delete";
import { useDeleteHotel } from "@/hooks/use-hotel";

const HotelAction = ({ hotelId }: { hotelId: string }) => {


  const { mutate, isPending } = useDeleteHotel()
  const handleDelete = () => {
    mutate(hotelId)
  }
  return (
    <ButtonGroup>
      {/* 
      Hotel update link */}
      <Button
        variant="outline"
      >
        <Link
          to={`/hotel/update/${hotelId}`}
          className="flex gap-1.5 items-center"
        >
          <Edit /> Update hotel
        </Link>

      </Button>
      <Button
        variant="outline"
      >
        <Link
          to={`/room/${hotelId}/create`}
          className="flex gap-1.5 items-center"
        >
          <PlusCircle /> Add rooms
        </Link>

      </Button>
      {/*  Hotel image upload */}
      <ImageUpload hotelId={hotelId} />

      {/* Hotel delete action */}
      <HotelDelete isLoading={isPending} onDelete={() => handleDelete()} />
    </ButtonGroup>

  )
}

export default HotelAction