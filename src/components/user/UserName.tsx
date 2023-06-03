import styles from "./User.module.scss";
const UserName = ({
  userName,
  fontSize = "20px",
}: {
  userName: string;
  fontSize?: string;
}) => {
  return (
    <h6 style={{ fontSize: fontSize }} className={styles.name}>
      {userName}
    </h6>
  );
};

export default UserName;
