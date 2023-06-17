import styles from "./BestSellers.module.scss";
import Title from "src/components/ui/title/Title";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";

type TypeBestSeller = {
  id: number;
  userName: string;
  userAvatar: string;
  userType: string;
  amount: number;
};

const BestSellers: FC = () => {
  const [sellers, setSellers] = useState<TypeBestSeller[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<TypeBestSeller[]>(
        "http://localhost:3000/bestList"
      );
      setSellers(response.data);
    };
    fetchData();
  }, []);

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
        {sellers.map((sellerItem) => (
          <motion.li
            animate={"visible"}
            initial={"hidden"}
            variants={pVariants}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
            className={styles.item}
            key={sellerItem.userName}
          >
            <NavLink to={`/author/${sellerItem.id}`}>
              <UserAvatar
                userAvatar={sellerItem.userAvatar}
                userName={sellerItem.userName}
                width="120px"
                height="120px"
                borderRadius="40px"
              />
              <footer className={styles.footer}>
                <UserName userName={sellerItem.userName} fontSize="18px" />
                <span className={styles.amount}>{sellerItem.amount} ETH</span>
              </footer>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BestSellers;
