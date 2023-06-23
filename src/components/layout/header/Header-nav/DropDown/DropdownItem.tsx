import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  link: string;
  name: string;
};

const DropdownItem: FC<Props> = ({ link, name }) => {
  return (
    <NavLink to={link} className="p-4 hover:bg-coutdown">
      {name}
    </NavLink>
  );
};

export default DropdownItem;
