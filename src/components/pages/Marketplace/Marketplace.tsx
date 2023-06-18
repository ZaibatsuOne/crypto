import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import Categories from "src/components/ui/Categories/Categories";
import Input from "src/components/ui/Input/Input";
import NftItem from "src/components/nft/NftItem/NftItem";
import Sort from "src/components/ui/Sort/Sort";
import styles from "./Marketplace.module.scss";
import { FC, useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { motion } from "framer-motion";

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

const Marketplace: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(8);
  const [nftCard, setNftCard] = useState<NftFetch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState({
    name: "Все",
    sortProperty: "id",
  });
  const [category, setCategory] = useState<number>(0);

  const categoryUrl: string = category > 0 ? `category=${category}` : "";
  const orderUrl: "desc" | "asc" = sort.sortProperty.includes("-")
    ? "desc"
    : "asc";
  const sortBy: string = sort.sortProperty.replace("-", "");
  const searchUrl: string = search ? `&search=${search}` : "";

  useEffect(() => {
    window.scroll(0, 300);
  }, []);
  const url = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchNft = async () => {
      const response = await axios.get<NftFetch[]>(
        `${url}?${categoryUrl}${searchUrl}&sortBy=${sortBy}&order=${orderUrl}`
      );
      setTimeout(() => {
        setNftCard(response.data);
        // setIsLoading(!isLoading);
      }, 100);
    };
    fetchNft();
  }, [category, sort, setNftCard]);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Categories category={category} setCategory={setCategory} />
        <div className="absolute right-[20%]">
          <Input
            placeholder="Поиск"
            icon={<ImSearch />}
            width="320px"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Sort sort={sort.name} setSort={setSort} />
      </header>
      {/* {isLoading ? ( */}
      <section className={styles.main}>
        {nftCard
          // .filter((item) =>
          //   item.title.toLowerCase().includes(search.toLowerCase())
          // )
          .slice(0, maxCards)
          .map((item) => (
            <motion.article
              transition={{ duration: 0.2 }}
              whileHover={{ y: -20 }}
              key={item.id}
            >
              <NftItem
                img={item.img}
                title={item.title}
                userName={item.user[0].userName}
                userAvatar={item.user[0].userAvatar}
                price={item.price}
                category={item.category}
              />
            </motion.article>
          ))}
      </section>
      {/* ) : (
        <Loading />
      )} */}
      <button
        className={maxCards === nftCard.length ? "hidden" : styles.button}
        onClick={() => setMaxCards((maxCards) => maxCards + 8)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};

export default Marketplace;