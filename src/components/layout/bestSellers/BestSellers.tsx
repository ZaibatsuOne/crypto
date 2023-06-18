import styles from "./BestSellers.module.scss";
import Title from "src/components/ui/title/Title";
import UserAvatar from "src/components/user/UserAvatar";
import UserName from "src/components/user/UserName";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";

type User = {
  id: number;
  userName: string;
  userAvatar: string;
  amount: number;
};

interface IBestSellers {
  id: number;
  user: User[];
}

const BestSellers: FC = () => {
  const [sellers, setSellers] = useState<IBestSellers[]>([]);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<IBestSellers[]>(url);
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
        {sellers.slice(0, 9).map((sellerItem) => (
          <motion.li
            animate={"visible"}
            initial={"hidden"}
            variants={pVariants}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -10 }}
            className={styles.item}
            key={sellerItem.user[0].userName}
          >
            <NavLink to={`/author/${sellerItem.user[0].id}`}>
              <UserAvatar
                userAvatar={sellerItem.user[0].userAvatar}
                userName={sellerItem.user[0].userName}
                width="120px"
                height="120px"
                borderRadius="40px"
              />
              <footer className={styles.footer}>
                <UserName
                  userName={sellerItem.user[0].userName}
                  fontSize="18px"
                />
                <span className={styles.amount}>
                  {sellerItem.user[0].amount} ETH
                </span>
              </footer>
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default BestSellers;
