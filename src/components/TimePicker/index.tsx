import { TimePicker as AntTimePicker, TimePickerProps } from "@feb/kk-design";
import moment from "moment";

export interface ITimePickerProps extends Omit<TimePickerProps, "onChange"> {
  range?: boolean;
  onChange: (value: string | undefined) => void;
}

export const TimePicker: React.FC<ITimePickerProps> = (props) => {
  const { onChange, range } = props;
  const valueChange = (value: moment.Moment | null) => {
    onChange(value?.toLocaleString());
  };
  const value = props.value ? moment(props.value) : null;
  return !range ? (
    <AntTimePicker onChange={valueChange} format="hh:mm:ss" value={value} />
  ) : (
    <AntTimePicker.RangePicker
      onChange={onChange}
      value={value}
      placeholder={["开始时间", "结束时间"]}
    />
  );
};
export default TimePicker;
