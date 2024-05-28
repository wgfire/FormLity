import { RightOutlined } from "@ant-design/icons";
import { Flex } from "@feb/kk-design";

export interface TriggerBoxProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
}
export const TriggerBox: React.FC<TriggerBoxProps> = (props) => {
  const { value, onClick, placeholder = "请选择" } = props;
  return (
    <Flex alignItems="center" style={{ width: "100%" }} justifyContent="flex-end">
      {value && (
        <div
          style={{
            flexGrow: "1",
            marginRight: "10px",
            width: "0px",
            wordBreak: "break-word",
          }}
        >
          {value}
        </div>
      )}
      <span
        onClick={onClick}
        style={{
          justifyItems: "flex-end",
          flexShrink: 0,
          flexBasis: "max-content",
          color: "#999999",
          fontSize: "14px",
        }}
      >
        {placeholder}
        <RightOutlined style={{ marginLeft: "10px" }} />
      </span>
    </Flex>
  );
};
