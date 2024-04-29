import { Button, Empty } from "@feb/kk-design";
import styles from "./index.module.less";
import { SelectCheckBox } from "../SelectCheckBox";
import { memo, useMemo } from "react";
import { useImmer } from "use-immer";


export const TYPE = {
  USER: "user",
  DEPARTMENT: "department",
  PARTNER_GROUP: "partner_group",
  PARTNER: "partner",
  TEAM_SHARE_PARTNER: "TeamSharePartner",
  DING_TALK: "DingTalk",
};
export const SelectPanel = memo((props) => {
  const { data } = props;

  const [state, setState] = useImmer({
    checked: [],
  });
  const numberLength = useMemo(() => {
    return data.filter(
      (el) => el.type === TYPE.USER || el.platform_type === TYPE.DING_TALK
    ).length;
  }, [data]);
  const departmentLength = useMemo(() => {
    return data.filter((el) => el.type === TYPE.DEPARTMENT).length;
  }, [data]);
  const partnerLength = useMemo(() => {
    return data.filter(
      (el) =>
        el.type === TYPE.PARTNER || el.platform_type === TYPE.TEAM_SHARE_PARTNER
    ).length;
  }, [data]);
  const partnerGroupLength = useMemo(() => {
    return data.filter((el) => el.type === TYPE.PARTNER_GROUP).length;
  }, [data]);

  const setCheckeds = (value) => {
    setState((draft) => {
      let newCheckeds = [...draft.checked];
      if (newCheckeds.includes(value)) {
        newCheckeds = newCheckeds.filter((el) => el !== value);
      } else {
        newCheckeds.push(value);
      }
      draft.checked = newCheckeds;
    });
  };
  return (
    <div className={styles.select}>
      <section className={styles.selectHeader}>
        <span>
          <p>
            {"已选 "}
            <span className={styles.noticeText}>{numberLength}</span>
            {"成员"}
            {"和 "}
            <span className={styles.noticeText}>{departmentLength}</span>
            {"部门"}
          </p>
          <p>
            {(partnerLength > 0 || partnerGroupLength > 0) && (
              <p>
                {"已选 "}
                <span className={styles.noticeText}>{partnerLength}</span>
                {"合作伙伴"} {"和"}
                <span className={styles.noticeText}>
                  {partnerGroupLength}
                </span>{" "}
                {"合作伙伴分组"}
              </p>
            )}
          </p>
        </span>
        <Button
          danger
          type="text"
          style={{ color: "#ff4d4f" }}
          onClick={() => props.onClearAll()}
        >
          {"全部清除"}
        </Button>
      </section>
      <section className={styles.selectBox}>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <SelectCheckBox
                checkedBox={false}
                suffixHover
                suffix={
                  <Button type="text" danger style={{ color: "#ff4d4f" }}>
                    {'移除'}
                  </Button>
                }
                onActionClick={(value) => {
                  props.onClear(item.id);
                }}
                subTitle={
                  <>
                    {item.department && (
                      <div style={{ color: "#1c1d23cc", fontSize: "12px" }}>
                        {item.department}
                      </div>
                    )}
                    {(item.type === "partner" ||
                      item.platform_type === TYPE.TEAM_SHARE_PARTNER) && (
                      <div style={{ color: "#1c1d23cc", fontSize: "12px" }}>
                        {"合作伙伴"}
                      </div>
                    )}
                    {item.type === "partner_group" && (
                      <div style={{ color: "#1c1d23cc", fontSize: "12px" }}>
                        {"合作伙伴分组"}
                      </div>
                    )}
                  </>
                }
                key={item.id}
                item={item}
                checked={state.checked.includes(item.id)}
                onChange={(id) => {
                  setCheckeds(id);
                }}
              />
            );
          })
        ) : (
          <Empty style={{ marginTop: "30PX" }} />
        )}
      </section>
    </div>
  );
});
