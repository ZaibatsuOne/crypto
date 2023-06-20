import { FC } from "react";
import styles from "../ItemDetailsPage.module.scss";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";

const ItemDetailsBar: FC = () => {
  return (
    <section className="flex flex-col gap-5">
      <p>История ставок</p>
      <div className={styles.line} />
      <ul className={styles.list}>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UserAvatar userAvatar="../img/nft/All/2.png" />
            <div>
              <span className="flex gap-2 items-center">
                <UserName userName="Mason Woodward" space="" />
                <p>поставил ставку</p>
              </span>
              <p>8 часов назад</p>
            </div>
          </div>
          <p className="text-caption-1 font-bold">4.89 ETH</p>
        </li>
        <div className={styles.line} />
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <UserAvatar userAvatar="../img/nft/All/2.png" />
            <div>
              <span className="flex gap-2 items-center">
                <UserName userName="Mason Woodward" space="" />
                <p>поставил ставку</p>
              </span>
              <p>8 часов назад</p>
            </div>
          </div>
          <p className="text-caption-1 font-bold">4.89 ETH</p>
        </li>
      </ul>
    </section>
  );
};

export default ItemDetailsBar;
