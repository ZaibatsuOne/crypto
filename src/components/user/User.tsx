import styles from "./User.module.scss";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import TypeUser from "../../ts/TypeUser";
import { FC } from "react";
const User: FC<TypeUser> = ({ userName, userAvatar, userType }) => {
  return (
    <div className={styles.user}>
      <UserAvatar userAvatar={userAvatar} userName={userName} />
      <div className={styles.wrapper}>
        <p className={styles.type}>{userType}</p>
        <div className={styles.carousel}>
          <UserName userName={userName} />
        </div>
      </div>
    </div>
  );
};

export default User;