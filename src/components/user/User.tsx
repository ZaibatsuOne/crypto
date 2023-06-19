import styles from "./User.module.scss";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import { TypeUser } from "src/types/User.type";

const User: FC<TypeUser> = ({
  userName,
  userAvatar,
  userType = "Владелец",
  id,
}) => {
  return (
    <div className={styles.user}>
      <UserAvatar userAvatar={userAvatar} userName={userName} />
      <div className={styles.wrapper}>
        <p className={styles.type}>{userType}</p>
        <Marquee>
          <UserName userName={userName} />
        </Marquee>
      </div>
    </div>
  );
};

export default User;
