import axios from "axios";
import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import Coutdown from "src/components/ui/coutdown/Coutdown";
import Loading from "src/components/ui/Loading/Loading";
import Marquee from "react-fast-marquee";
import NftItem from "src/components/nft/Nft-Item/NftItem";
import styles from "./LiveAuction.module.scss";
import Title from "src/components/ui/title/Title";
import { FC, useEffect, useState } from "react";
import { INft } from "src/types/Nft.interface";
import Section from "../Section/Section";
import SectionHeader from "../Section/SectionHeader";

const LiveAuction: FC = () => {
  const [auction, setAuction] = useState<INft[]>([]);
  // Загрузка
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const url = import.meta.env.VITE_MOCKAPI_URL;

  // Подгрузка карточек
  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get<INft[]>(url);
      setTimeout(() => {
        setIsLoading(!isLoading);
        setAuction(response.data);
      }, 1500);
    };

    fetchAuction();
  }, []);

  return (
    <Section>
      <SectionHeader>
        {/* <Title title="Аукцион" /> */}
        <Title title="Аукцион" />
        <ButtonMore link="#" />
      </SectionHeader>
      {isLoading ? (
        <div>
          <div className={styles.shadow1} />
          <div className={styles.shadow2} />
          <Marquee>
            <section className={styles.wrapper}>
              {auction.slice(0, 8).map((auctionItem) => (
                <div key={auctionItem.id}>
                  <NftItem
                    id={auctionItem.id}
                    userId={auctionItem.user.id}
                    user={auctionItem.user}
                    img={auctionItem.img}
                    title={auctionItem.title}
                    userName={auctionItem.user.userName}
                    userAvatar={auctionItem.user.userAvatar}
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
    </Section>
  );
};

export default LiveAuction;
