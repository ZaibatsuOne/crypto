import { FC } from "react";

interface IStateInputProps {
  name: string;
  maxLength: number;
  placeholder: string;
  value: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const StateInput: FC<IStateInputProps> = ({
  name,
  maxLength,
  placeholder,
  value,
  handleInput,
}) => {
  return (
    <input
      className="h-[66px] w-full p-4 text-body-regular outline-none bg-footer rounded-xl"
      name={name}
      required
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
    />
  );
};

export default StateInput;
