import { observer, useForm } from "@formily/react";
import { DatePicker as AntDatePicker, List } from "antd-mobile";
import { useState } from "react";
import moment from "moment";
import { ICbaseProps } from "@/global";
import { PickerDate } from "antd-mobile/es/components/date-picker/util";

export const DatePickerRange = observer<ICbaseProps>((props) => {
  const { onChange, value } = props;
  const [selectedType, setSelectedType] = useState("start"); 
  const [visible, setVisible] = useState(false);
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  const handleDateChange: (date: PickerDate, type: string) => void = ( date,type) => {
    const newDate = moment(date).format("YYYY-MM-DD");
    onChange({ ...value, [type]: newDate }); 
  };
  const defaultValue =
    selectedType === "start"
      ? new Date(value?.start ?? '')
      : new Date(value?.end ?? '');
  const renderDatePicker = () => (
    <AntDatePicker
      value={defaultValue}
      getContainer={
        designEnable ? document.getElementById("modeWrapper")! : undefined
      }
      onConfirm={(select) => {
        handleDateChange(select, selectedType);
        setVisible(false);
      }}
      visible={visible}
      onClose={() => setVisible(false)}
    />
  );

  return (
    <>
      <List>
        <List.Item
          extra={value?.start || "选择"}
          onClick={() => {
            setSelectedType("start");
            setVisible(true);
          }}
        >
          <span style={{ fontSize: "14px" }}>开始时间</span>
        </List.Item>
        <List.Item
          extra={value?.end || "选择"}
          onClick={() => {
            setSelectedType("end");
            setVisible(true);
          }}
        >
          <span style={{ fontSize: "14px" }}>结束时间</span>
        </List.Item>
      </List>
      {renderDatePicker()}
    </>
  );
});
