import ActivityItem from "./Activity-item/ActivityItem";
import Button from "src/components/ui/Buttons/Button";
import FilterItem from "src/components/ui/Filter-item/FilterItem";
import Input from "src/components/ui/Input/Input";
import styles from "./ActivityPage.module.scss";
import { activityList } from "src/ts/Activity";
import { BiSearchAlt } from "react-icons/bi";
import { FC, useState } from "react";
import { filterList } from "src/ts/Filter";
import { motion } from "framer-motion";

const ActivityPage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(4);
  const [search, setSearch] = useState<string>("");
  const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const pVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transistion: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <section className={styles.list}>
          {activityList
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, maxCards)
            .map((item) => (
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
                  author={item.author}
                />
              </motion.article>
            ))}
        </section>
        <button
          className={styles.button}
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
          <button
            className={maxCards === filterList.length ? "hidden" : styles.reset}
          >
            Сбросить фильтр
          </button>
        </div>
      </aside>
    </section>
  );
};

export default ActivityPage;
