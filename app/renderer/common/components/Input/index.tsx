import React from 'react';
import classnames from 'classnames';

const TYPE = {
  text: 'text',
  textarea: 'textarea',
};

export type Type = 'text' | 'textarea' | '';
export type SizeType = 'normal' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * @description 控件类型
   */
  type?: Type;
  /**
   * @description 控件大小
   */
  size?: SizeType;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 设置前置标签
   */
  addonBefore?: React.ReactNode;
  /**
   * @description 设置后置标签
   */
  addonAfter?: React.ReactNode;
  /**
   * @description 可以计数
   */
  allowCount?: boolean;
  /**
   * @description 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * @description textarea行数，默认3
   */
  rows?: number;
  /**
   * @description 动态样式
   */
  style?: React.CSSProperties;
  /**
   * @description 输入框内容
   */
  value?: string | number | undefined;
  /**
   * @description 输入框占位符
   */
  placeholder?: string;
  /**
   * @description 输入框id
   */
  id?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 是否背景透明
   */
  bgTransparent?: boolean;
  /**
   * @description 毁掉函数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputState {
  focus: boolean;
  text: string | number;
}

export default class Input extends React.PureComponent<InputProps, InputState> {
  input: HTMLInputElement | HTMLTextAreaElement | undefined;
  constructor(props: InputProps) {
    super(props);
    this.state = {
      focus: false,
      text: props?.value || '',
    };
  }

  componentDidMount(): void {
    if (this.props.value) {
      this.setState({
        text: this.props.value,
      });
    }
  }

  componentWillReceiveProps(nextProps: Readonly<InputProps>, nextContext: any): void {
    if (nextProps.value) {
      this.setState({
        text: nextProps.value
      })
    }
  }
  render(): React.ReactNode {
    const { bgTransparent = false, type, style, allowClear } = this.props;
    return (
      <div
        style={style}
        styleName={classnames('my-input', {
          normal: !bgTransparent,
          focus: this.state.focus,
          'allow-clear': allowClear,
        })}
      >

      </div>
    );
  }
}