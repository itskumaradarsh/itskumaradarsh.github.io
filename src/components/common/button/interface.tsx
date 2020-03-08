export interface IButton {
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
