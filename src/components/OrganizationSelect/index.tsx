import { Select } from "@feb/kk-design";
import { observer } from "@formily/react";
import { useRef, useState } from "react";
import { ModalSelect } from "./components/Modal";
interface OrganizationSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  externalLoad?:()=>void,
  externalSearchUser?: (name: string) => void;
  organization?: string;
  disabled?: boolean;
  immediately?: boolean;
}

interface OrganizationSelectOption {
  id: string;
  name: string;
  type: string;
  children?: OrganizationSelectOption[];
}
export const OrganizationSelect = observer<
  OrganizationSelectProps
>((props) => {
  const {
    value,
    onChange,
    placeholder,
    externalLoad,
    externalSearchUser,
    organization,
    disabled = false,
    immediately = false,
  } = props;
  const [open, setOpen] = useState(false);
  const selectData = useRef<OrganizationSelectOption[]>([]);
  const [options, setOptions] = useState<OrganizationSelectOption[]>([]);
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
          onChange(data.map((item) => item.id));
        }}
      />
    </div>
  );
});



export default OrganizationSelect;
