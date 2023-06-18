import axios from "axios";
import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import Coutdown from "src/components/ui/coutdown/Coutdown";
import Loading from "src/components/ui/Loading/Loading";
import Marquee from "react-fast-marquee";
import NftItem from "src/components/nft/NftItem/NftItem";
import styles from "./LiveAuction.module.scss";
import Title from "src/components/ui/title/Title";
import { FC, useEffect, useState } from "react";

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

const LiveAuction: FC = () => {
  const [auction, setAuction] = useState<NftFetch[]>([]);
  // Загрузка
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  // Подгрузка карточек
  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get<NftFetch[]>(url);
      setTimeout(() => {
        setIsLoading(!isLoading);
        setAuction(response.data);
      }, 1500);
    };

    fetchAuction();
  }, []);

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Аукцион" />
        <ButtonMore link="#" />
      </header>
      {isLoading ? (
        <div>
          <div className={styles.shadow1} />
          <div className={styles.shadow2} />
          <Marquee>
            <section className={styles.wrapper}>
              {auction.slice(0, 8).map((auctionItem) => (
                <div key={auctionItem.id}>
                  <NftItem
                    img={auctionItem.img}
                    title={auctionItem.title}
                    userName={auctionItem.user[0].userName}
                    userAvatar={auctionItem.user[0].userAvatar}
                    price={auctionItem.price}
                    category={auctionItem.category}
                    coutdown={<Coutdown />}
                  />
                </div>
              ))}
            </section>
          </Marquee>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default LiveAuction;
