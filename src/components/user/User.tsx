import styles from "./User.module.scss";
import TypeUser from "src/ts/TypeUser";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const User: FC<TypeUser> = ({ userName, userAvatar, userType }) => {
  return (
    <div className={styles.user}>
      <UserAvatar userAvatar={userAvatar} userName={userName} />
      <div className={styles.wrapper}>
        <p className={styles.type}>{userType}</p>
        <Marquee>
          <UserName userName={userName} />
        </Marquee>
        {/* <div className={styles.carousel}>
          <UserName userName={userName} />
        </div> */}
      </div>
    </div>
  );
};

export default User;
