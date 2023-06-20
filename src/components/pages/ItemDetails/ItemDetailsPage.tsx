import axios from "axios";
import ItemDetailsBar from "./ItemDetails-bar/ItemDetailsBar";
import ItemDetailsContent from "./ItemDetails-content/ItemDetailsContent";
import NotFoundPage from "../NotFound/NotFoundPage";
import styles from "./ItemDetailsPage.module.scss";
import { FC, useEffect, useState } from "react";
import { INft } from "src/types/Nft.interface";
import { useParams } from "react-router-dom";
import LiveAuction from "src/components/layout/LiveAuction/LiveAuction";

const ItemDetailsPage: FC = () => {
  //Для отрисовки карточек по id
  const { id } = useParams();

  //MOCKAPI URL
  const url: string = import.meta.env.VITE_MOCKAPI_URL;

  //Карточки
  const [cards, setCards] = useState<INft | undefined>(undefined);

  //Отрисовка карточки
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${url}?id=${id}`);
      setCards(response.data[0]);
    };
    fetchData();
  }, []);

  // Скролл на карточку
  useEffect(() => {
    window.scroll(0, 670);
  }, []);

  return (
    <>
      <section className="flex flex-col gap-20">
        {cards ? (
          <section className={styles.section}>
            <div>
              <img src={cards.img} alt={cards.title} className={styles.img} />
            </div>
            <aside>
              <ItemDetailsContent
                title={cards.title}
                price={cards.price}
                id={cards.user.id}
                userName={cards.user.userName}
                userAvatar={cards.user.userAvatar}
                description={cards.description}
              />
              <ItemDetailsBar />
            </aside>
          </section>
        ) : (
          <NotFoundPage />
        )}
        <LiveAuction />
      </section>
    </>
  );
};

export default ItemDetailsPage;
