import { AiOutlineSync } from "react-icons/ai";
import { FC } from "react";

const History: FC = () => {
  return (
    <a className="flex items-center gap-1" href="#">
      <AiOutlineSync />
      <p>История</p>
    </a>
  );
};

export default History;
