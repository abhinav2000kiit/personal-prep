import { Field } from "../types";

export const formConfig: Field[] = [
    { type: "text", name: "title", label: "Title" },
    { type: "number", name: "price", label: "Price" },
    {
      type: "group",
      name: "amenities",
      label: "Amenities",
      fields: [
        { type: "text", name: "amenities.wifi", label: "Wifi" },
        { type: "text", name: "amenities.parking", label: "Parking" },
      ],
    },
  ];