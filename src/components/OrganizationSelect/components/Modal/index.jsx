/**
 * 组织人员选择器
 */

import { Modal, Select, Skeleton, message } from "@feb/kk-design";
import { CascadeSelect } from "../CascadeSelect";
import { usePresenter } from "./presenter";
import { initState } from "./model";
import { useEffect } from "react";
import { useDebounceFn, useUpdateEffect } from "ahooks";
import { useMemo } from "react";

export const ModalSelect = (props) => {
  const {
    open,
    title = "管理成员",
    onCancel,
    onSubmit,
    defaultSelect = [],
    externalLoad,
    externalSearchUser,
    organization,
  } = props;
  const { state, loadData, setState, getDepartmentTreeData, searchUser } =
    usePresenter(externalLoad, externalSearchUser, organization);
  const {
    listTree,
    checkedKeys,
    selectData,
    loading,
    searchUserData,
    searchLoading,
  } = state;

  useEffect(() => {
    open && getDepartmentTreeData();
    !open && setState(initState);
  }, [open]);

  /**defaultSelect 默认为空所以用这个hooks更新 */
  useUpdateEffect(() => {
    if (open) {
      if (!selectData) {
        setState((draft) => {
          draft.selectData = defaultSelect;
          draft.checkedKeys = defaultSelect.map((item) => item.id);
        });
      }
    }
  }, [open, defaultSelect]);

  const { run: onSearch } = useDebounceFn(searchUser, { wait: 500 });
  const onChangeHandel = (value) => {
    if (value) {
      const data = searchUserData.filter((item) => {
        return item.id === value;
      });

      setState((draft) => {
        const isExit = draft.selectData.find((item) => {
          return item.id === data[0].id;
        });
        if (!isExit) {
          draft.selectData = [...draft.selectData, data[0]];
          draft.checkedKeys = [...draft.checkedKeys, data[0].id];
        } else {
          message.warning("此用户已被选择");
        }
      });
    } else {
      setState((draft) => {
        draft.searchValue = "";
      });
      onSearch("");
    }
  };
  const SearchBox = useMemo(() => {
    return (
      <Select
        onChange={(value) => {
          onChangeHandel(value);
        }}
        showSearch
        allowClear
        placeholder={"搜索成员"}
        style={{ width: "100%" }}
        filterOption={false}
        onSearch={(value) => {
          onSearch(value);
        }}
        dropdownRender={(menu) => {
          return (
            <>
              {searchLoading ? (
                <Skeleton round style={{ padding: "4px" }} active />
              ) : (
                menu
              )}
            </>
          );
        }}
        options={(searchUserData || []).map((d) => ({
          value: d.id,
          label: d.name,
        }))}
      />
    );
  }, [searchUserData]);
  return (
    <Modal
      open={open}
      title={title}
      width={800}
      onCancel={() => {
        setState(initState);
        onCancel();
      }}
      destroyOnClose
      onOk={() => {
        onSubmit(selectData);
      }}
    >
      <CascadeSelect
        loading={loading}
        searchBox={SearchBox}
        style={{ marginTop: "20px" }}
        onLoad={async (item) => {
          const data = await loadData({ parentId: item.id });
          return data;
        }}
        sourceData={listTree}
        checkedKeys={checkedKeys}
        selectData={selectData}
        onSelectData={(array) => {
          setState((draft) => {
            draft.selectData = array;
          });
        }}
        onSelectKeys={(keys) => {
          setState((draft) => {
            draft.checkedKeys = keys;
          });
        }}
      />
    </Modal>
  );
};
