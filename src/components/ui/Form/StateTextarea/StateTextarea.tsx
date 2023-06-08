import { FC } from "react";

interface IStateAreaProps {
  name: string;
  placeholder: string;
  value: string;
  handleInput: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

const StateTextarea: FC<IStateAreaProps> = ({
  name,
  placeholder,
  value,
  handleInput,
}) => {
  return (
    <textarea
      className="px-5 py-4 h-36 bg-footer  rounded-lg outline-none resize-none"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
    />
  );
};

export default StateTextarea;
