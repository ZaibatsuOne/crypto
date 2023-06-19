import Likes from "src/components/ui/likes/Likes";
import Price from "src/components/ui/price/Price";
import styles from "./NftItem.module.scss";
import User from "src/components/user/User";
import { FC, ReactNode } from "react";
import { INft } from "src/types/Nft.interface";

type NftItemProps = {
  userName: string;
  userAvatar: string;
  coutdown?: ReactNode;
  bidButton?: ReactNode;
  history?: ReactNode;
} & INft;

const NftItem: FC<NftItemProps> = ({
  img,
  id,
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
        <User userName={userName} userAvatar={userAvatar} id={id} />
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
