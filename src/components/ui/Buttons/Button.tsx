import styles from "./Button.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { TypeButton } from "src/types/Button.type";

const Button: FC<TypeButton> = ({
  text,
  icon,
  link = "#",
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
  paddingX = "28px",
  paddingY = "16px",
}) => {
  return (
    <NavLink
      to={link}
      style={{
        background: background,
        borderColor: borderColor,
        color: color,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      className={styles.button}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </NavLink>
  );
};

export default Button;
