import { FC } from "react";
import styles from "./Button.module.scss";
import ButtonModel from "../../../models/ButtonModel";
const Button: FC<ButtonModel> = ({
  text,
  icon,
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
}) => {
  return (
    <button
      style={{ background: background, borderColor: borderColor, color: color }}
      className={styles.button}
    >
      <span>{icon}</span>
      <p>{text}</p>
    </button>
  );
};

export default Button;
