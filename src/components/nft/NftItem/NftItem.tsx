import Likes from "src/components/ui/likes/Likes";
import Price from "src/components/ui/price/Price";
import styles from "./NftItem.module.scss";
import User from "src/components/user/User";
import { FC } from "react";

type NftItemProps = {
  img: string;
  title: string;
  price: number;
  category: number;
  userId?: number;
  userName: string;
  userAvatar: string;
  coutdown?: React.ReactNode;
  bidButton?: React.ReactNode;
  history?: React.ReactNode;
};

const NftItem: FC<NftItemProps> = ({
  img,
  title,
  userName,
  userAvatar,
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
        <span className={styles.net}>BSC</span>
      </header>
      <footer className={styles.footer}>
        {/* пофиксить ID, разобраться откуда идут пропсы */}
        <User userName={userName} userAvatar={userAvatar} id={1} />
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
