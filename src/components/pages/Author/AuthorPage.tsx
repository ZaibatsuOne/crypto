import AuthorProfile from "./Author-profile/AuthorProfile";
import Button from "src/components/ui/Buttons/Button";
import NftItem from "src/components/nft/NftItem/NftItem";
import styles from "./AuthorPage.module.scss";
import { FC, useState } from "react";
import { liveAuction } from "src/ts/LiveAuction";
import { motion } from "framer-motion";
import { pVariants } from "src/animation/variants";
import { useParams } from "react-router-dom";

export type TypeCategoryList = {
  category: number | null;
  name: string;
};

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

  const sectionVariant = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 250, opacity: 0 },
  };

  const { id } = useParams();

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
        {liveAuction
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
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                userType={item.userType}
                net={item.net}
                category={item.category}
                userAvatar={item.userAvatar}
                userName={item.userName}
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
