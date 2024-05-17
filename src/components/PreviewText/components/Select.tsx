import { Tag } from "@feb/kk-design";
import { observer } from "@formily/react";

export interface SelectProps {
  options: {
    value: string | number;
    label: string;
    children?: SelectProps["options"];
  }[];
  value: string | number;
}

export const Select = observer(({ options, value }: SelectProps) => {
  const findLabel = (
    value: string | number,
    options: SelectProps["options"]
  ): string => {
    const option = options.find((item) => item.value === value);
    if (option) {
      return option.label;
    } else {
      // Recursively search in children
      for (const childOption of options) {
        if (childOption.children) {
          const label = findLabel(value, childOption.children);
          if (label) {
            return `${childOption.label}/${label}`;
          }
        }
      }
    }
    return "";
  };

  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item) => (
          <Tag key={item}>{findLabel(item, options)}</Tag>
        ))}
      </>
    );
  }

  return <Tag>{findLabel(value, options)}</Tag>;
});
