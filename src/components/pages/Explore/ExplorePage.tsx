import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import Categories from "src/components/ui/Categories/Categories";
import NftItem from "src/components/nft/NftItem/NftItem";
import Sort from "src/components/ui/Sort/Sort";
import styles from "./ExplorePage.module.scss";
import { FC, useEffect, useState } from "react";
import { NftWithUser } from "src/ts/LiveAuction";

const ExplorePage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(8);
  const [chooseIndex, setChooseIndex] = useState<number | null>(null);
  const [chooseSort, setChooseSort] = useState<number | null | string>(null);
  const [nftCard, setNftCard] = useState<NftWithUser[]>([]);
  useEffect(() => {
    const fetchNft = async () => {
      const response = await axios.get<NftWithUser[]>(
        "https://6454dae6a74f994b334ad4fb.mockapi.io/NFT"
      );
      setTimeout(() => {
        setNftCard(response.data);
      }, 1000);
    };
    fetchNft();
  }, []);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Categories chooseIndex={chooseIndex} setChooseIndex={setChooseIndex} />
        <Sort chooseSort={chooseSort} setChooseSort={setChooseSort} />
      </header>
      <section className={styles.main}>
        {nftCard
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
