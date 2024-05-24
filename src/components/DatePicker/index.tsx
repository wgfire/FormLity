import { DatePicker as AntDatePicker } from "@feb/kk-design";
import moment from "moment";
import { ICbaseProps } from "@/global";

export interface IDatePickerProps extends ICbaseProps {
  range?: boolean;
  value: moment.Moment;
}
export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { onChange, range } = props;
  const format = "YYYY-MM-DD";
  const valueChange = (newValue: moment.Moment) => {
    if (Array.isArray(newValue)) {
      onChange([
        moment(newValue[0]).format(format),
        moment(newValue[1]).format(format),
      ]);
    } else {
      onChange(newValue?.format(format));
    }
  };
  const value = props.value
    ? Array.isArray(props.value)
      ? [moment(props.value[0]), moment(props.value[1])]
      : moment(props.value)
    : "";

  return !range ? (
    <AntDatePicker
      format={format}
      value={value}
      onChange={valueChange}
      disabled={props.disabled}
    />
  ) : (
    <AntDatePicker.RangePicker
      disabled={props.disabled}
      format={format}
      value={value}
      onChange={valueChange}
      placeholder={["开始时间", "结束时间"]}
    />
  );
};

export default DatePicker;
