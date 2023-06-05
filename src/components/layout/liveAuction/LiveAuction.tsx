import styles from "./LiveAuction.module.scss";
import Title from "../../ui/title/Title";
import { FC, useEffect, useState } from "react";
import { RxDot } from "react-icons/rx";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NftItem from "../../nft/NftItem/NftItem";
import Coutdown from "../../ui/coutdown/Coutdown";
import axios from "axios";
import { NftWithUser } from "../../../ts/LiveAuction";
import ButtonMore from "../../ui/Buttons/ButtonMore/ButtonMore";

const LiveAuction: FC = () => {
  const [auction, setAuction] = useState<NftWithUser[]>([]);
  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get<NftWithUser[]>(
        "https://6454dae6a74f994b334ad4fb.mockapi.io/NFT"
      );
      setTimeout(() => {
        setAuction(response.data);
      }, 1500);
    };

    fetchAuction();
  }, []);
  const [transform, setTransform] = useState<number>(0);
  const handleNext = () => {
    let newTransform: number = transform + 1;
    if (newTransform > 4) {
      newTransform = 0;
    }
    setTransform(newTransform);
  };
  const handlePrev = () => {
    let newTransform: number = transform - 1;
    if (newTransform < 0) {
      newTransform = 4;
    }
    setTransform(newTransform);
  };
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Аукцион" />
        <ButtonMore link="#" />
      </header>
      <div className={styles.window}>
        <section
          className={styles.liveAuction}
          style={{
            transition: "0.4s ease-in-out",
            transform: `translateX(${-transform * 360}px)`,
          }}
        >
          {auction.slice(0, 8).map((auctionItem) => (
            <div key={auctionItem.id}>
              <NftItem
                id={auctionItem.id}
                img={auctionItem.img}
                title={auctionItem.title}
                net={auctionItem.net}
                userName={auctionItem.userName}
                userAvatar={auctionItem.userAvatar}
                userType={auctionItem.userType}
                price={auctionItem.price}
                category={auctionItem.category}
                coutdown={<Coutdown />}
              />
            </div>
          ))}
        </section>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev}>
          <BsArrowLeft />
        </button>
        <RxDot />
        <RxDot />
        <RxDot />
        <RxDot />
        <button onClick={handleNext}>
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
};

export default LiveAuction;
