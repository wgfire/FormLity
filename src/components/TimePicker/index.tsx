import { observer } from "@formily/react";
import { TimePicker as AntTimePicker } from "@feb/kk-design";
export const TimePicker = observer((props) => {
  const { onChange, range } = props;
  const valueChange = (value) => {
    onChange(value.format("h:mm:ss"));
  };

  return !range ? (
    <AntTimePicker onChange={valueChange} format="hh:mm:ss" {...props} />
  ) : (
    <AntTimePicker.RangePicker
      onChange={onChange}
      format="hh:mm:ss"
      {...props}
      placeholder={["开始时间", "结束时间"]}
    />
  );
});
export default TimePicker;
