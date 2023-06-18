import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import History from "src/components/ui/History/History";
import Loading from "src/components/ui/Loading/Loading";
import NftItem from "src/components/nft/NftItem/NftItem";
import styles from "./TodayPicks.module.scss";
import Title from "src/components/ui/title/Title";
import { BiData } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pVariants, sectionVariant } from "src/animation/variants";

type User = {
  id: number;
  userName: string;
  userAvatar: string;
  amount: number;
};

interface NftFetch {
  id: number;
  img: string;
  title: string;
  price: number;
  category: number;
  user: User[];
}

const TodayPicks: FC = () => {
  const [picks, setPicks] = useState<NftFetch[]>([]);
  const [maxCards, setMaxCards] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchPicks = async () => {
      const response = await axios.get<NftFetch[]>(url);
      setTimeout(() => {
        setIsLoading(!isLoading);
        setPicks(response.data);
      }, 1500);
    };
    fetchPicks();
  }, []);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Title title="Сегодняшние выборы" />
        <ButtonMore link="/marketplace" />
      </header>
      {isLoading ? (
        <motion.section
          variants={sectionVariant}
          animate={"visible"}
          initial={"hidden"}
          transition={{ duration: 1 }}
          className={styles.section}
        >
          {picks.slice(0, maxCards).map((picksItem) => (
            <motion.article
              variants={pVariants}
              animate={"visible"}
              initial={"hidden"}
              transition={{ duration: 1.3 }}
              key={picksItem.id}
            >
              <NftItem
                img={picksItem.img}
                title={picksItem.title}
                userName={picksItem.user[0].userName}
                userAvatar={picksItem.user[0].userAvatar}
                price={picksItem.price}
                category={picksItem.category}
                bidButton={<Button text="Ставка" icon={<BiData />} />}
                history={<History />}
              />
            </motion.article>
          ))}
        </motion.section>
      ) : (
        <Loading />
      )}
      <button
        className={maxCards === 16 ? "hidden" : styles.footer}
        onClick={() => setMaxCards((prevCount) => prevCount + 4)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};

export default TodayPicks;
