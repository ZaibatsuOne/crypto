import User from "../user/User";
import styles from "./NftItem.module.scss";
import { NFTwithUser } from "../../ts/LiveAuction";
import Price from "../ui/price/Price";
import Coutdown from "../ui/coutdown/Coutdown";

const NftItem = ({
  img,
  title,
  net,
  userName,
  userAvatar,
  userType,
  price,
}: NFTwithUser) => {
  return (
    <article className={styles.block}>
      <img src={img} alt={title} />
      <header className={styles.header}>
        <q className={styles.title}>{title}</q>
        <span className={styles.net}>{net}</span>
      </header>
      <footer className={styles.footer}>
        <User userName={userName} userAvatar={userAvatar} userType={userType} />
        <Price price={price} />
      </footer>
      <Coutdown />
    </article>
  );
};

export default NftItem;
