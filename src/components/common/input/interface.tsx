export interface IInputProps {
  placeholder: string;
  onChange?: (e: any) => void;
  type: 'email' | 'text-area' | 'text';
  name?: string;
  isRequired?: boolean;
}
