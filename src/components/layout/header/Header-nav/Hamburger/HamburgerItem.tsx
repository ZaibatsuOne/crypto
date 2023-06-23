import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  link: string;
  name: string;
};

const HamburgerItem: FC<Props> = ({ link, name }) => {
  return <NavLink to={link}>{name}</NavLink>;
};

export default HamburgerItem;
