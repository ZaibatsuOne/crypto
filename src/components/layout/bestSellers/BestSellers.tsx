import styles from "./BestSellers.module.scss";
import Title from "src/components/ui/title/Title";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";
import { bestSellers } from "src/ts/BestSellers";
import { FC } from "react";
import { motion } from "framer-motion";

const BestSellers: FC = () => {
  const pVariants = {
    visible: (i: number) => ({
      opacity: 1,
      duration: {
        delay: i * 0.5,
      },
      y: 0,
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <section className={styles.wrapper}>
      <header>
        <Title title="Лучшие продавцы" />
      </header>
      <ul className={styles.list}>
        {bestSellers.map((bestSellersItem) => (
          <motion.li
            animate={"visible"}
            initial={"hidden"}
            variants={pVariants}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
            className={styles.item}
            key={bestSellersItem.userName}
          >
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
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BestSellers;
