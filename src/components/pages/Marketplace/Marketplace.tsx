import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import Categories from "src/components/ui/Categories/Categories";
import Input from "src/components/ui/Input/Input";
import NftItem from "src/components/nft/Nft-Item/NftItem";
import Sort from "src/components/ui/Sort/Sort";
import styles from "./Marketplace.module.scss";
import { FC, useEffect, useState, useRef } from "react";
import { ImSearch } from "react-icons/im";
import { INft } from "src/types/Nft.interface";
import { motion } from "framer-motion";
import { pVariants } from "src/utils/AnimationVariants";
import NoResult from "src/components/ui/NoResult/NoResult";
import Section from "src/components/layout/Section/Section";
import { BiCategory } from "react-icons/bi";

const Marketplace: FC = () => {
  const [maxCards, setMaxCards] = useState<number>(8);
  const [nftCard, setNftCard] = useState<INft[]>([]);
  const [toggleCategory, setToggleCategory] = useState<boolean>(false);
  const divRef = useRef<HTMLButtonElement | null>(null);
  const [search, setSearch] = useState<string>("");
  //Сортировка по параметрам
  const [sort, setSort] = useState({
    name: "Все",
    sortProperty: "id",
  });
  //Выбор категории
  const [category, setCategory] = useState<number>(0);

  //Сортировка
  const categoryUrl: string = category > 0 ? `category=${category}` : "";
  const orderUrl: "desc" | "asc" = sort.sortProperty.includes("-")
    ? "desc"
    : "asc";
  const sortBy: string = sort.sortProperty.replace("-", "");
  const searchUrl: string = search ? `&search=${search}` : "";

  // Перемещает страницу вверх
  useEffect(() => {
    window.scroll(0, 300);
  }, []);
  // Mockapi url
  const url = import.meta.env.VITE_MOCKAPI_URL;

  //Отрисовка карточек
  useEffect(() => {
    const fetchNft = async () => {
      const response = await axios.get<INft[]>(
        `${url}?${categoryUrl}${searchUrl}&sortBy=${sortBy}&order=${orderUrl}`
      );
      setTimeout(() => {
        setNftCard(response.data);
      }, 100);
    };
    fetchNft();
  }, [category, sort, nftCard, search]);
  useEffect(() => {
    document.body.addEventListener("click", (e: MouseEvent) => {
      if (divRef.current && !e.composedPath().includes(divRef.current)) {
        setToggleCategory(false);
      }
    });
  }, []);

  return (
    <Section>
      <header className={styles.header}>
        <button onClick={() => setToggleCategory(!toggleCategory)} ref={divRef}>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <div className={toggleCategory ? styles.toggle : "hidden"}>
          <Categories
            category={category}
            setCategory={setCategory}
            initialState={toggleCategory}
          />
        </div>
        <div className="absolute right-[20%] hidden xl:flex">
          <Input
            placeholder="Поиск"
            icon={<ImSearch />}
            width="320px"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Sort sort={sort.name} setSort={setSort} />
      </header>
      {nftCard.length > 0 ? (
        <section className={styles.main}>
          {nftCard.slice(0, maxCards).map((item) => (
            <motion.article
              variants={pVariants}
              initial={"hidden"}
              animate={"visible"}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -20 }}
              key={item.id}
            >
              <NftItem
                id={item.id}
                img={item.img}
                title={item.title}
                user={item.user}
                userId={item.user.id}
                userName={item.user.userName}
                userAvatar={item.user.userAvatar}
                price={item.price}
                category={item.category}
              />
            </motion.article>
          ))}
        </section>
      ) : (
        <NoResult />
      )}
      {nftCard.length > 0 ? (
        <button
          className={maxCards === nftCard.length ? "hidden" : styles.button}
          onClick={() => setMaxCards((maxCards) => maxCards + 8)}
        >
          <Button text="Показать больше" icon={null} />
        </button>
      ) : (
        ""
      )}
    </Section>
  );
};

export default Marketplace;
