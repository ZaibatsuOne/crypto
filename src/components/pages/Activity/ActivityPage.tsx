import ActivityItem from "./Activity-item/ActivityItem";
import Button from "src/components/ui/Buttons/Button";
import FilterItem from "src/components/ui/Filter-item/FilterItem";
import Input from "src/components/ui/Input/Input";
import styles from "./ActivityPage.module.scss";
import { activityList } from "src/data/Activity.data";
import { BiSearchAlt } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { filterList } from "src/data/Blog.data";
import { motion } from "framer-motion";
import { pVariants } from "src/utils/AnimationVariants";
import { INft } from "src/types/Nft.interface";
import axios from "axios";

const ActivityPage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(4);
  const [search, setSearch] = useState<string>("");
  const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [cards, setCards] = useState<INft[]>([]);
  const searchUrl: string = search ? `&search=${search}` : "";
  const url: string = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<INft[]>(
        `${url}?&sortBy=id&order=desc${searchUrl}`
      );
      setCards(response.data);
    };
    fetchData();
  }, [search]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <section className={styles.list}>
          {cards.slice(0, maxCards).map((item) => (
            <motion.article
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 1.5 }}
              variants={pVariants}
              className={styles.item}
              key={item.id}
            >
              <ActivityItem
                title={item.title}
                img={item.img}
                author={item.user[0].userName}
              />
            </motion.article>
          ))}
        </section>
        <button
          className={maxCards === cards.length ? "hidden" : styles.button}
          onClick={(): void => setMaxCards((maxCards) => maxCards + 4)}
        >
          <Button text="Показать больше" icon={null} borderColor="#FFF" />
        </button>
      </div>
      <aside className={styles.aside}>
        <Input
          placeholder="Найти по истории"
          icon={<BiSearchAlt />}
          width="340px"
          onChange={handleInp}
        />
        <div className={styles.filter}>
          <h5>Фильтр</h5>
          <ol className={styles.filterList}>
            {filterList.map((item) => (
              <li className={styles.filterItem} key={item.title}>
                <FilterItem icon={item.icon} title={item.title} />
              </li>
            ))}
          </ol>
          <button className={styles.reset}>Сбросить фильтр</button>
        </div>
      </aside>
    </section>
  );
};

export default ActivityPage;
