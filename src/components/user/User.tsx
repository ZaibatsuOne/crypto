import UserAvatar from "./UserAvatar";
import styles from "./User.module.scss";
import UserName from "./UserName";
import UserType from "../../ts/UserType";
const User = ({ userName, userAvatar, userType }: UserType) => {
  return (
    <div className={styles.user}>
      <UserAvatar userAvatar={userAvatar} />
      <div className={styles.wrapper}>
        <p className={styles.type}>{userType}</p>
        <UserName userName={userName} />
      </div>
    </div>
  );
};

export default User;
