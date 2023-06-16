import styles from "./Button.module.scss";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type TypeButton = {
  text: string;
  icon: React.ReactNode | null;
  link?: string;
  background?: string;
  borderColor?: string;
  color?: string;
  paddingX?: string;
};

const Button: FC<TypeButton> = ({
  text,
  icon,
  link = "#",
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
  paddingX = "28px",
}) => {
  return (
    <NavLink
      to={link}
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
