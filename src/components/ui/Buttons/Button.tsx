import ButtonModel from "src/models/ButtonModel";
import styles from "./Button.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Button: FC<ButtonModel> = ({
  text,
  icon,
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
  paddingX = "28px",
}) => {
  return (
    <NavLink
      to="/"
      style={{
        background: background,
        borderColor: borderColor,
        color: color,
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
