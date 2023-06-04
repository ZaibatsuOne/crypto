import styles from "./LiveAuction.module.scss";
import Title from "../../ui/title/Title";
import { FC, useEffect, useState } from "react";
import { RxDot } from "react-icons/rx";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NftItem from "../../nft/NftItem";
import { NavLink } from "react-router-dom";
import Coutdown from "../../ui/coutdown/Coutdown";
import axios from "axios";
import { NftWithUser } from "../../../ts/LiveAuction";

const LiveAuction: FC = () => {
  const [auction, setAuction] = useState<NftWithUser[]>([]);
  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/647b52679d312622a369d51b"
      );
      setTimeout(() => {
        setAuction(response.data.record);
      }, 1500);
    };

    fetchAuction();
  }, []);
  const [transform, setTransform] = useState<number>(0);
  const handleNext = () => {
    let newTransform: number = transform + 1;
    if (newTransform > auction.length - 4) {
      newTransform = 0;
    }
    setTransform(newTransform);
  };
  const handlePrev = () => {
    let newTransform: number = transform - 1;
    if (newTransform < 0) {
      newTransform = auction.length - 4;
    }
    setTransform(newTransform);
  };
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Аукцион" />
        <NavLink className={styles.excerpt} to="/">
          Показать больше
        </NavLink>
      </header>
      <div className={styles.window}>
        <section
          className={styles.liveAuction}
          style={{
            transition: "0.4s ease-in-out",
            transform: `translateX(${-transform * 360}px)`,
          }}
        >
          {auction.map((liveAuctionItem, index) => (
            <div key={index}>
              <NftItem
                img={liveAuctionItem.img}
                title={liveAuctionItem.title}
                net={liveAuctionItem.net}
                userName={liveAuctionItem.userName}
                userAvatar={liveAuctionItem.userAvatar}
                userType={liveAuctionItem.userType}
                price={liveAuctionItem.price}
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
