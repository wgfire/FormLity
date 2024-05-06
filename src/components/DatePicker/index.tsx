import { observer } from "@formily/react";
import { DatePicker as AntDatePicker } from "@feb/kk-design";
import moment from "moment";
import { ICbaseProps } from "@/global";

export interface IDatePickerProps extends ICbaseProps {
  range?: boolean;
}
export const DatePicker: React.FC<IDatePickerProps> = observer((props) => {
  const { onChange, range } = props;
  const format = "YYYY-MM-DD";
  const valueChange = (newValue) => {
    if (Array.isArray(newValue)) {
      onChange([
        moment(newValue[0]).format(format),
        moment(newValue[1]).format(format),
      ]);
    } else {
      onChange(moment(newValue).format(format));
    }
  };
  const value = Array.isArray(props.value)
    ? [moment(props.value[0]), moment(props.value[1])]
    : moment(props.value);

  return !range ? (
    <AntDatePicker
      format={format}
      {...props}
      onChange={valueChange}
      value={value}
    />
  ) : (
    <AntDatePicker.RangePicker
      format={format}
      {...props}
      onChange={valueChange}
      value={value}
      placeholder={["开始时间", "结束时间"]}
    />
  );
});

export default DatePicker;
