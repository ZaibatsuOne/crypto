import styles from "../Button.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";

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
