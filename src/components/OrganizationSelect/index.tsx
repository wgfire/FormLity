import { Select } from "@feb/kk-design";
import { observer } from "@formily/react";
import { useRef, useState } from "react";
import { ModalSelect } from "./components/Modal";
import { useUpdateEffect } from "ahooks";
interface OrganizationSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  externalLoad?: () => void;
  externalSearchUser?: (name: string) => void;
  organization?: string;
  disabled?: boolean;
  immediately?: boolean;
  defaultSelect?: string[];
}

interface OrganizationSelectOption {
  id: string;
  name: string;
  type: string;
  children?: OrganizationSelectOption[];
}
export const OrganizationSelect = observer<OrganizationSelectProps>((props) => {
  const {
    value,
    onChange,
    placeholder,
    externalLoad,
    externalSearchUser,
    organization,
    disabled = false,
    immediately = false,
    defaultSelect = [],
  } = props;
  const [open, setOpen] = useState(false);
  const selectData = useRef<string[]>([]);
  const [options, setOptions] = useState<OrganizationSelectOption[]>([]);

  useUpdateEffect(() => {
    if (open) {
      selectData.current = defaultSelect;
    }
  }, [defaultSelect]);
  return (
    <div>
      <Select
        maxTagCount={10}
        value={value}
        options={options}
        disabled={disabled}
        style={{ width: "100%" }}
        placeholder={placeholder}
        fieldNames={{ label: "name", value: "id" }}
        mode="multiple"
        onChange={(keys) => {
          selectData.current = selectData.current.filter((item) =>
            keys.includes(item.id)
          );
          onChange(keys);
        }}
        open={false}
        onClick={() => setOpen(true)}
      />

      <ModalSelect<OrganizationSelectOption>
        onCancel={() => setOpen(false)}
        open={open}
        immediately={immediately}
        externalLoad={externalLoad}
        externalSearchUser={externalSearchUser}
        organization={organization}
        defaultSelect={selectData.current}
        onSubmit={(data) => {
          setOpen(false);
          setOptions(data);
          selectData.current = data;
          onChange(data);
        }}
      />
    </div>
  );
});

export default OrganizationSelect;
