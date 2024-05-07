import { Avatar, Checkbox } from "@feb/kk-design";
import styles from "./index.module.less";
import { ApartmentOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { TYPE } from "../Select";

const ApartMentIcon = (props) => {
  const { type } = props;
  return (
    <span
      className={styles.iconBox}
      style={{ backgroundColor: type === "partner_group" ? "#00a5ff" : "" }}
    >
      <ApartmentOutlined />
    </span>
  );
};
const AvatarIcon = (props) => {
  return (
    <Avatar
      src={props.src}
      size="default"
      alt={props.name}
      style={{ marginRight: "8px",width:"40px",height:"40px" }}
    />
  );
};
export const SelectCheckBox = (props) => {
  const {
    item,
    onActionClick,
    suffix,
    onChange,
    checked,

    /**
     * 是否hover状态显示shffix
     */
    suffixHover = false,
    checkedBox = true,
    subTitle,
  } = props;
  const { name, avatar, type, platform_type } = item;

  return (
    <div className={styles.selectItem}>
      <section className={styles.left}>
        {checkedBox && (
          <Checkbox
            checked={checked}
            defaultChecked={false}
            onChange={(e) => {
              onChange(item.id);
            }}
          />
        )}

        <div className={styles.avatarBox}>
          {type === TYPE.PARTNER_GROUP || type === TYPE.DEPARTMENT ? (
            <ApartMentIcon type={type} />
          ) : (
            <AvatarIcon src={avatar} name={name} />
          )}
          <div>
            <span style={{ color: "#1C1D23" }}>{name}</span>
            {subTitle}
          </div>
        </div>
      </section>

      <section
        className={clsx({
          [styles.right]: true,
          [styles.rightHover]: suffixHover,
        })}
        onClick={() => onActionClick?.(item)}
      >
        {suffix}
      </section>
    </div>
  );
};
