import { useForm } from "@formily/react";
import { DatePicker as AntDatePicker } from "antd-mobile";
import { useState } from "react";
import moment from "moment";
import { DatePickerRange } from "../DatePickerRange";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";
import { ICbaseProps } from "@/global";
import { TriggerBox } from "../TriggerBox";

export interface ICDatePickerProps extends ICbaseProps {
  range?: boolean;
}
export const DatePicker: React.FC<ICDatePickerProps> = (props) => {
  const { onChange, range } = props;
  const [visible, setVisible] = useState(false);
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  const value = props.value ? new Date(props.value as string) : null;
  const valueChange = (newValue: PickerDate) => {
    onChange(moment(newValue).format("YYYY-MM-DD"));
  };
  return !range ? (
    <>
      <TriggerBox
        placeholder="请选择"
        value={value}
        onClick={() => setVisible(true)}
      ></TriggerBox>
      <AntDatePicker
        mouseWheel
        getContainer={
          designEnable ? document.getElementById("modeWrapper")! : undefined
        }
        onConfirm={(select) => {
          valueChange(select);
          setVisible(false);
        }}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        value={value}
      />
    </>
  ) : (
    <>
      <DatePickerRange onChange={onChange} value={value} />
    </>
  );
};

export default DatePicker;
