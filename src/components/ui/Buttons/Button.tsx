import { FC } from "react";
import styles from "./Button.module.scss";
import ButtonModel from "../../../models/ButtonModel";
const Button: FC<ButtonModel> = ({
  text,
  icon,
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
  paddingX = "28px",
}) => {
  return (
    <button
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
    </button>
  );
};

export default Button;