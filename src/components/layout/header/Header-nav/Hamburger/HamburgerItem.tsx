import { FC, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  link: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
};

const HamburgerItem: FC<Props> = ({ link, name, onClick }) => {
  return (
    <NavLink to={link} onClick={onClick}>
      {name}
    </NavLink>
  );
};

export default HamburgerItem;
