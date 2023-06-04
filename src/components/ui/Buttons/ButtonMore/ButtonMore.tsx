import { NavLink } from "react-router-dom";
import styles from "../Button.module.scss";
import { FC } from "react";
type TypeButton = {
  link: string;
};
const ButtonMore: FC<TypeButton> = ({ link }) => {
  return (
    <NavLink className={styles.buttonMore} to={link}>
      Показать больше
    </NavLink>
  );
};

export default ButtonMore;
