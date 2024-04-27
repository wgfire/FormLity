import { Schema } from "@formily/react";

interface IFormSchema extends Schema {
  key: string;
  parent: IFormSchema;
}
declare type DeviceType = "pc" | "mobile";

declare interface ICbaseProps {
  onChange: (value: any) => void;
  value: string | number | any[] | object;
  options?: { label: string; value: string }[];
}
