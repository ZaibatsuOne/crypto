import { FC } from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <input
        className="h-[66px] w-full p-4 text-body-regular outline-none bg-footer rounded-xl"
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        {...(register("name"), { required: true })}
      />
    </>
  );
};

export default StateInput;
