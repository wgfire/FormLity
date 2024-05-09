import { Tag } from "@feb/kk-design";

export interface SelectProps {
  options: { value: string | number; label: string }[];
  value: string | number;
}

export const Select = ({ options, value }: SelectProps) => {
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item) => (
          <Tag key={item}>{options.find((opt) => opt.value === item)?.label}</Tag>
        ))}
      </>
    );
  }

  return <Tag>{options.find((item) => item.value === value)?.label}</Tag>;
};

