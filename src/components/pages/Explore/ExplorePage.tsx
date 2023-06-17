import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import Categories from "src/components/ui/Categories/Categories";
import Loading from "src/components/ui/Loading/Loading";
import NftItem from "src/components/nft/NftItem/NftItem";
import Sort from "src/components/ui/Sort/Sort";
import styles from "./ExplorePage.module.scss";
import { FC, useEffect, useState } from "react";
import { NftWithUser } from "src/ts/LiveAuction";
import { motion } from "framer-motion";

const ExplorePage: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(8);
  const [chooseSort, setChooseSort] = useState<number | null | string>(null);
  const [nftCard, setNftCard] = useState<NftWithUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [chooseIndex, setChooseIndex] = useState<number | null>(null);

  const handleCategory = (category: number | null) => {
    setChooseIndex(category);
  };

  useEffect(() => {
    const fetchNft = async () => {
      const response = await axios.get<NftWithUser[]>(
        "https://6454dae6a74f994b334ad4fb.mockapi.io/NFT"
      );
      setTimeout(() => {
        setNftCard(response.data);
        setIsLoading(!isLoading);
      }, 1000);
    };
    fetchNft();
  }, []);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Categories chooseIndex={chooseIndex} handleCategory={handleCategory} />
        <Sort chooseSort={chooseSort} setChooseSort={setChooseSort} />
      </header>

      {isLoading ? (
        <section className={styles.main}>
          {nftCard
            .filter(
              (item) => chooseIndex === null || chooseIndex === item.category
            )
            .slice(0, maxCards)
            .map((item) => (
              <motion.article
                transition={{ duration: 0.2 }}
                whileHover={{ y: -20 }}
                key={item.id}
              >
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
              </motion.article>
            ))}
        </section>
      ) : (
        <Loading />
      )}
      <button
        className={maxCards === nftCard.length ? "hidden" : styles.button}
        onClick={() => setMaxCards((maxCards) => maxCards + 8)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};

export default ExplorePage;
