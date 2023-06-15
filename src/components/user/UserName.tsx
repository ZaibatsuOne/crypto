import styles from "./User.module.scss";
import { FC } from "react";

type TypeUserNameProps = {
  userName: string;
  fontSize?: string;
};

const UserName: FC<TypeUserNameProps> = ({ userName, fontSize = "20px" }) => {
  return (
    <h6 style={{ fontSize: fontSize }} className={styles.name}>
      {userName + "    "}
    </h6>
  );
};

export default UserName;
