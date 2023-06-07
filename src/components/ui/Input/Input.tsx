import styles from "./Input.module.scss";
import { FC } from "react";

interface IInputProps {
  placeholder: string;
  icon: React.ComponentType | any;
  width?: string;
}

const Input: FC<IInputProps> = ({ placeholder, icon, width = "255px" }) => {
  return (
    <form>
      <input
        className={styles.input}
        placeholder={placeholder}
        style={{ width: width }}
      />
      <button className={styles.button}>{icon}</button>
    </form>
  );
};

export default Input;
