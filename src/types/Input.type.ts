export type TypeInput = {
  placeholder: string;
  icon: React.ReactNode | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
