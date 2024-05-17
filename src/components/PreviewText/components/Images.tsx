import { Flex, Image } from "@feb/kk-design";
import { observer } from "@formily/react";

export const Images = observer((props) => {
  const { value } = props;

  return (
    <Flex gap={4} flexWrap="wrap">
      {value?.map((el) => {
        return <Image src={el.url}></Image>;
      })}
    </Flex>
  );
});
