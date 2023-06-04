import { FC } from "react";
import { AiOutlineSync } from "react-icons/ai";

const History: FC = () => {
  return (
    <a className="flex items-center gap-1" href="#">
      <AiOutlineSync />
      <p>История</p>
    </a>
  );
};

export default History;
