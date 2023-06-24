import styles from "./Input.module.scss";
import { FC } from "react";
import { TypeInput } from "src/types/Input.type";

const Input: FC<TypeInput> = ({
  onChange,
  placeholder,
  icon,
  width = "255px",
  onClick,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
        style={{ minWidth: width }}
        onChange={onChange}
      />
      <button onClick={onClick} className={styles.button}>
        {icon}
      </button>
    </div>
  );
};

export default Input;
