export type Field =
  | {
      type: "text" | "number";
      name: string;
      label: string;
    }
  | {
      type: "group";
      name: string;
      label: string;
      fields: Field[];
    };
