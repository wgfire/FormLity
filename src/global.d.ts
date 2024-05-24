import { Schema } from "@formily/react";

interface  IFormSchema extends Omit<Schema, "properties"> {
  key: string;
  properties: IFormSchema;
  [key: string]: unknown;
}
declare type DeviceType = "pc" | "mobile" ;

declare interface ICbaseProps {
  onChange: (value: unknown) => void;
  value: string | number | unknown[] | object;
  options?: { label: string; value: string }[];
  disabled?: boolean;
}
