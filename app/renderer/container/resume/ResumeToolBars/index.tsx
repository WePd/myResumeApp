/**
 * @description 编辑简历-工具条模块
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@common/components/ScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import { useDispatch } from 'react-redux';
import { onAddToolbar, onDeleteToolbar } from './utils';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';

function ResumeToolbar() {
  const dispatch = useDispatch();
  const height = document.body.clientHeight;

  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [delToolbarList, setDelToolbarList] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addToolbarList: TSResume.SliderItem[] = [];
      let _delToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((item: TSResume.SliderItem) => {
        if (item.require) _addToolbarList.push(item);
        if (!item.require) _delToolbarList.push(item);
      });

      setAddToolbarList(_addToolbarList);
      setDelToolbarList(_delToolbarList);
    }
  }, []);

  const changeResumeToolbarKeys = (keys: string) => {
    if (keys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: keys,
        },
      });
    }
  };

  // 添加
  const handleAdd = (toolBars: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, toolBars);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(delToolbarList, toolBars);
    setDelToolbarList(nextUnAddSliderList);
    // changeResumeToolbarKeys(nextAddSliderList.map((item:TSResume.SliderItem) => item.key))
  };

  // 删除
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(delToolbarList, moduleSlider);
    setDelToolbarList(nextUnAddSliderList);
  };
  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {!!addToolbarList.length && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              已添加模块
            </div>
            <div styleName="content">
              {addToolbarList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={toolbar.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        form_name: toolbar.key,
                      });
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{toolbar.name}</div>
                        <div styleName="summary">{toolbar.summary}</div>
                      </div>
                      {toolbar.require && <div className="tips">必选项</div>}
                      {toolbar.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onDeleteSliderAction(toolbar);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!delToolbarList.length && (
          <div styleName="module">
            <div styleName="title un-first">
              <span styleName="line" />
              未添加模块
            </div>
            <div styleName="content">
              {delToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={unAddSlider.key}
                    onClick={() => {
                      handleAdd(unAddSlider);
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{unAddSlider.name}</div>
                        <div styleName="summary">{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
