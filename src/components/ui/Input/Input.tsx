import styles from "./Input.module.scss";
import { FC } from "react";

interface IInputProps {
  placeholder: string;
  icon: React.ComponentType<any> | any;
  handleInp?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
}

const Input: FC<IInputProps> = ({
  handleInp,
  placeholder,
  icon,
  width = "255px",
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
        style={{ width: width }}
        onChange={handleInp}
      />
      <button className={styles.button}>{icon}</button>
    </div>
  );
};

export default Input;
