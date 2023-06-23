import { FC } from "react";

type Props = {
  children: React.ReactNode;
  initialState: boolean;
};

const DropdownGroup: FC<Props> = ({ children, initialState }) => {
  return (
    <ol
      className={
        initialState
          ? "absolute mt-3 rounded-2xl flex flex-col bg-nftBg w-40 top-[53px] shadow-2xl"
          : "hidden"
      }
    >
      {children}
    </ol>
  );
};

export default DropdownGroup;
