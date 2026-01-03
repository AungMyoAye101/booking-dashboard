import type { hotelCreateType } from "@/validations/hotel-schmea";
import type { FieldValues, Path } from "react-hook-form";

type FormFieldType = | 'text' | 'number' | 'textarea' | 'select';

export interface BasedFormType<T extends FieldValues> {
    name: Path<T>,
    type: FormFieldType,
    label: string,
    placeholder?: string
}

export interface SelectFormType<T extends FieldValues> extends BasedFormType<T> {
    type: "select",
    options: {
        value: string,
        label: string
    }[]
}

export type HotelCreateFormConfig<T extends FieldValues> = | BasedFormType<T> | SelectFormType<T>;



export const createHotelFormFields: HotelCreateFormConfig<hotelCreateType>[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Hotel name",
    },
    {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Hotel description",
    },
    {
        name: "rating",
        label: "Rating",
        type: "number",
        placeholder: "1 - 10",
    },
    {
        name: "star",
        label: "Star",
        type: "number",
        placeholder: "1 - 5",
    },
    {
        name: "type",
        label: "Type",
        type: "select",
        options: [
            { label: "Hotel", value: "hotel" },
            { label: "Motel", value: "motel" },
            { label: "Guest House", value: "guest-house" },
        ],
    },
    {
        name: "price",
        label: "Price",
        type: "number",
        placeholder: "Price per night",
    },
    {
        name: "address",
        label: "Address",
        type: "text",
    },
    {
        name: "city",
        label: "City",
        type: "text",
    },


];


export const AMENITIES = [
    { label: "Wi-Fi", value: "wifi" },
    { label: "Swimming Pool", value: "pool" },
    { label: "Parking", value: "parking" },
    { label: "Air Conditioning", value: "ac" },
    { label: "Gym", value: "gym" },
];
