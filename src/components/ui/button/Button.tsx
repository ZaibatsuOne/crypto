import styles from "./Button.module.scss";
const Button = ({
  text,
  icon,
  background = "none",
  borderColor = "#5142FC",
  color = "#FFF",
}: {
  text: string;
  icon: string;
  background: string;
  borderColor: string;
  color: string;
}) => {
  return (
    <button
      style={{ background: background, borderColor: borderColor, color: color }}
      className={styles.button}
    >
      <img src={icon} />
      <p>{text}</p>
    </button>
  );
};

export default Button;
