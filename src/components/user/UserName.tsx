import styles from "./User.module.scss";
import { FC } from "react";

type TypeUserNameProps = {
  userName: string;
  fontSize?: string;
  space?: string;
};

const UserName: FC<TypeUserNameProps> = ({
  userName,
  fontSize = "20px",
  space = "    ",
}) => {
  return (
    <h6 style={{ fontSize: fontSize }} className={styles.name}>
      {userName + space}
    </h6>
  );
};

export default UserName;
