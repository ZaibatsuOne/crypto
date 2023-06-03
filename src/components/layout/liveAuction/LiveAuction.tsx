import styles from "./LiveAuction.module.scss";
import Title from "../../ui/title/Title";
import { liveAuction } from "../../../ts/LiveAuction";
import { useState } from "react";
import { RxDot } from "react-icons/rx";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NftItem from "../../nft/NftItem";
import { NavLink } from "react-router-dom";
const LiveAuction = () => {
  const [transform, setTransform] = useState(0);
  const handleNext = () => {
    let newTransform = transform + 1;
    if (newTransform > liveAuction.length - 4) {
      newTransform = 0;
    }
    setTransform(newTransform);
  };
  const handlePrev = () => {
    let newTransform = transform - 1;
    if (newTransform < 0) {
      newTransform = liveAuction.length - 4;
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
          {liveAuction.map((liveAuctionItem, index) => (
            <div key={index}>
              <NftItem
                img={liveAuctionItem.img}
                title={liveAuctionItem.title}
                net={liveAuctionItem.net}
                userName={liveAuctionItem.userName}
                userAvatar={liveAuctionItem.userAvatar}
                userType={liveAuctionItem.userType}
                price={liveAuctionItem.price}
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
