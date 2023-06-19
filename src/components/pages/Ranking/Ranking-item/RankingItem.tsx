import { FC } from "react";
import styles from "../RankingPage.module.scss";
import User from "src/components/user/User";

type TypeRankingItem = {
  title: string;
  img: string;
  price: number;
  userId: number;
  userName: string;
  userAvatar: string;
};

const RankingItem: FC<TypeRankingItem> = ({
  title,
  price,
  userId,
  userName,
  userAvatar,
  img,
}) => {
  return (
    <>
      <div className="col-span-2">
        <div className={styles.nft}>
          <img src={img} alt={title} className={styles.nft_thumbail} />
          <div className={styles.wrapper}>
            <h6 className={styles.nft_title}>{title}</h6>
            <User id={userId} userName={userName} userAvatar={userAvatar} />
          </div>
        </div>
      </div>
      <p className="font-medium text-xl">{price}</p>
      <p className="text-done font-medium text-xl">+3456%</p>
      <p className="text-critical font-medium text-xl"> -564%</p>
      <p className="font-medium text-xl">12,4353</p>
      <p className="font-medium text-xl">3.3k</p>
      <p className="font-medium text-xl">23k</p>
    </>
  );
};

export default RankingItem;
