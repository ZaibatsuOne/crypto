import styles from "./NftItem.module.scss";
import User from "../../user/User";
import { NftWithUser } from "../../../ts/LiveAuction";
import Price from "../../ui/price/Price";
import Likes from "../../ui/likes/Likes";
import { FC } from "react";

const NftItem: FC<NftWithUser> = ({
  img,
  title,
  net,
  userName,
  userAvatar,
  userType,
  price,
  coutdown,
  bidButton,
  history,
}) => {
  return (
    <article className={styles.block}>
      <div className={styles.image}>
        <img src={img} alt={title}></img>
        <div className={styles.coutdown}>{coutdown}</div>
        <div className={styles.likes}>
          <Likes />
        </div>
      </div>
      <header className={styles.header}>
        <q className={styles.title}>{title}</q>
        <span className={styles.net}>{net}</span>
      </header>
      <footer className={styles.footer}>
        <User userName={userName} userAvatar={userAvatar} userType={userType} />
        <Price price={price} />
      </footer>
      <div className={styles.inner}>
        <span>{bidButton}</span>
        <p>{history}</p>
      </div>
    </article>
  );
};

export default NftItem;
