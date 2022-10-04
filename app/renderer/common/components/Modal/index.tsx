/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import MyModal from '@components/MyModal';
 * <MyModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/MyModal';
 * <Confirm />
 */
import Dialog from './Dialog';
import Confirm from './Confirm';

export default {
  Dialog: Dialog,
  Confirm: Confirm,
};
