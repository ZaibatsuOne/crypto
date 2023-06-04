import styles from "./BestSellers.module.scss";
import { FC } from "react";
import Title from "../../ui/title/Title";
import { bestSellers } from "../../../ts/BestSellers";
import UserAvatar from "../../user/UserAvatar";
import UserName from "../../user/UserName";
const BestSellers: FC = () => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Title title="Лучшие продавцы" />
      </header>
      <ul className={styles.list}>
        {bestSellers.map((bestSellersItem) => (
          <li className={styles.item} key={bestSellersItem.userName}>
            <UserAvatar
              userAvatar={bestSellersItem.userAvatar}
              userName={bestSellersItem.userName}
              width="120px"
              height="120px"
              borderRadius="40px"
            />
            <footer className={styles.footer}>
              <UserName userName={bestSellersItem.userName} fontSize="18px" />
              <span className={styles.amount}>
                {bestSellersItem.amount} ETH
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BestSellers;
