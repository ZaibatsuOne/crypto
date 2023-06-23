import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import RankingItem from "./Ranking-item/RankingItem";
import Section from "src/components/layout/Section/Section";
import SectionHeader from "src/components/layout/Section/SectionHeader";
import styles from "./RankingPage.module.scss";
import Title from "src/components/ui/title/Title";
import { FC, useEffect, useState } from "react";
import { INft } from "src/types/Nft.interface";
import { motion } from "framer-motion";
import { pVariants } from "src/utils/AnimationVariants";

const RankingPage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(6);
  const [cards, setCards] = useState<INft[]>([]);

  const tableHead = [
    "Объем",
    "24ч %",
    "7д %",
    "Мин. цена",
    "Владельцы",
    "Ассеты",
  ];

  const url: string = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<INft[]>(
        `${url}?sortBy=price&order=desc`
      );
      setCards(response.data);
    };
    fetchData();
  }, []);

  return (
    <Section>
      <SectionHeader>
        <Title title="Рейтинг" />
      </SectionHeader>
      <ul className={styles.table}>
        <li className={styles.head}>
          <h6 className="w-[362px] col-span-2 ">Коллекция</h6>
          {tableHead.map((item) => (
            <h6>{item}</h6>
          ))}
        </li>
        <div className={styles.line} />
        {cards.slice(0, maxCards).map((item) => (
          <motion.li
            variants={pVariants}
            animate={"visible"}
            initial={"hidden"}
            custom={item.id}
            transition={{ duration: 1.2 }}
            className={styles.row}
            key={item.id}
          >
            <RankingItem
              title={item.title}
              img={item.img}
              price={item.price}
              userId={item.user.id}
              userName={item.user.userName}
              userAvatar={item.user.userAvatar}
            />
          </motion.li>
        ))}
      </ul>
      <button
        className={styles.button}
        onClick={(): void => setMaxCards((maxCards) => maxCards + 4)}
      >
        <Button text="Показать ещё" icon={null} borderColor="#FFF" />
      </button>
    </Section>
  );
};

export default RankingPage;
