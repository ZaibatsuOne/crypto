import AuthorProfile from "./Author-profile/AuthorProfile";
import Button from "src/components/ui/Buttons/Button";
import NftItem from "src/components/nft/NftItem/NftItem";
import styles from "./AuthorPage.module.scss";
import { FC, useState, useEffect } from "react";
import { liveAuction } from "src/ts/LiveAuction";
import { motion } from "framer-motion";
import { pVariants } from "src/animation/variants";
import { sectionVariant } from "src/animation/variants";
import axios from "axios";

export type TypeCategoryList = {
  category: number | null;
  name: string;
};
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

const AuthorPage: FC = () => {
  const categoryList: TypeCategoryList[] = [
    {
      category: null,
      name: "Все",
    },
    {
      category: 1,
      name: "Исскуство",
    },
    {
      category: 2,
      name: "Музыка",
    },
    {
      category: 3,
      name: "Коллекционные",
    },
    {
      category: 4,
      name: "Спорт",
    },
  ];

  const [category, setCategory] = useState<null | number>(null);
  const [maxCards, setMaxCards] = useState<number>(8);

  const [author, setAuthor] = useState<NftFetch[]>([]);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<NftFetch[]>(url);
      setAuthor(response.data);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 3 }}
      variants={sectionVariant}
      className={styles.profile}
    >
      <AuthorProfile
        categoryList={categoryList}
        category={category}
        setCategory={setCategory}
      />
      <section className={styles.list}>
        {author
          .filter((item) => item.category === category || category === null)
          .slice(0, maxCards)
          .map((item, index) => (
            <motion.article
              animate={"visible"}
              initial={"hidden"}
              variants={pVariants}
              transition={{ duration: 1 }}
              custom={index}
              key={item.id}
            >
              <NftItem
                img={item.img}
                title={item.title}
                price={item.price}
                category={item.category}
                userAvatar={item.user[0].userAvatar}
                userName={item.user[0].userName}
              />
            </motion.article>
          ))}
        <button
          className={styles.button}
          onClick={(): void => setMaxCards((maxCards) => maxCards + 4)}
        >
          <Button text="Показать больше" icon={null} borderColor="#FFF" />
        </button>
      </section>
    </motion.section>
  );
};

export default AuthorPage;
