import styles from "./ExplorePage.module.scss";
import Categories from "../../ui/Categories/Categories";
import Sort from "../../ui/Sort/Sort";
import { liveAuction } from "../../../ts/LiveAuction";
import NftItem from "../../nft/NftItem/NftItem";
import { useState } from "react";
import Button from "../../ui/Buttons/Button";
const ExplorePage = () => {
  const [category, setCategory] = useState(2);
  const [maxCards, setMaxCards] = useState(8);
  const categories: string[] = [
    "Все",
    "Искусство",
    "Музыка",
    "Коллекционные предметы",
    "Спорт",
  ];
  const handleCategory = () => {};
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Categories />
        <Sort />
      </header>
      <section className={styles.main}>
        {liveAuction.slice(0, maxCards).map((item) => (
          <article key={item.id}>
            <NftItem
              id={item.id}
              img={item.img}
              title={item.title}
              net={item.net}
              userName={item.userName}
              userAvatar={item.userAvatar}
              userType={item.userType}
              price={item.price}
            />
          </article>
        ))}
      </section>
      <button
        className={styles.button}
        onClick={() => setMaxCards((prevCount) => prevCount + 8)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};
// .filter((item) => item.id === category) Доработать выбор категории

export default ExplorePage;
