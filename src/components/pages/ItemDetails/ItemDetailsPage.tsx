import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import ItemDetailsBar from "./ItemDetails-bar/ItemDetailsBar";
import ItemDetailsContent from "./ItemDetails-content/ItemDetailsContent";
import LiveAuction from "src/components/layout/LiveAuction/LiveAuction";
import NotFoundPage from "../NotFound/NotFoundPage";
import Popup from "reactjs-popup";
import styles from "./ItemDetailsPage.module.scss";
import { BiData } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { INft } from "src/types/Nft.interface";
import { useParams } from "react-router-dom";
import { MdCancel, MdDownloadDone } from "react-icons/md";

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
  const [a, setA] = useState(false);
  const closeModal = () => setA(!a);
  return (
    <>
      <section className="flex flex-col gap-20">
        {cards ? (
          <section className={styles.section}>
            <div>
              <img src={cards.img} alt={cards.title} className={styles.img} />
            </div>
            <Popup open={a} modal>
              <div className={styles.popup}>
                <h6>Ставка</h6>
                <input className={styles.popup__input} />
                <div className={styles.popup__wrapper}>
                  <button onClick={closeModal}>
                    <Button
                      icon={<MdCancel />}
                      text="Отмена"
                      background="#d63031"
                      borderColor="#d63031"
                      paddingX="22px"
                    />
                  </button>
                  <button>
                    <Button
                      icon={<MdDownloadDone />}
                      text="Принять"
                      background="#2ecc71"
                      borderColor="#2ecc71"
                      paddingX="22px"
                    />
                  </button>
                </div>
              </div>
            </Popup>
            <aside className={styles.aside}>
              <ItemDetailsContent
                title={cards.title}
                price={cards.price}
                id={cards.user.id}
                userName={cards.user.userName}
                userAvatar={cards.user.userAvatar}
                description={cards.description}
              />
              <button onClick={() => setA(!a)}>
                <Button
                  text="Сделать ставку"
                  borderColor="#FFF"
                  icon={<BiData />}
                />
              </button>

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
