/**
 * 文本类型的预览
 */

import { Typography } from "@feb/kk-design";
import { observer } from "@formily/react";

export const Text = observer((props) => {
  const { value } = props;
  return Array.isArray(value) ? (
    <Typography.Text strong>{value.join("-")}</Typography.Text>
  ) : (
    <Typography.Text strong>{value}</Typography.Text>
  );
});
