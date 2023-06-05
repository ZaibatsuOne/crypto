import styles from "./ExplorePage.module.scss";
import Categories from "../../ui/Categories/Categories";
import Sort from "../../ui/Sort/Sort";
import { liveAuction } from "../../../ts/LiveAuction";
import NftItem from "../../nft/NftItem/NftItem";
import { FC, useState } from "react";
import Button from "../../ui/Buttons/Button";
const ExplorePage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(8);
  const [chooseIndex, setChooseIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Categories chooseIndex={chooseIndex} setChooseIndex={setChooseIndex} />
        <Sort />
      </header>
      <section className={styles.main}>
        {liveAuction
          .filter(
            (item) => chooseIndex === null || chooseIndex === item.category
          )
          .slice(0, maxCards)
          .map((item) => (
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
                category={item.category}
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

export default ExplorePage;
