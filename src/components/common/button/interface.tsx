export interface IButton {
  name?: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
  icon?: any;
}
