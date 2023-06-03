import styles from "./Homepage.module.scss";
import NftItem from "../../nft/NftItem";
import Title from "../../ui/title/Title";
import { liveAuction } from "../../../ts/LiveAuction";
import { useState } from "react";
import { RxDot } from "react-icons/rx";
const Homepage = () => {
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
    <section className={styles.homepage}>
      <section className={styles.section}>
        <Title title="Аукцион" />
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
                  price={liveAuctionItem.price}
                />
              </div>
            ))}
          </section>
        </div>
        <div className={styles.buttons}>
          <button onClick={handlePrev}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 7H1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.83333 12.8337L1 7.00033L6.83333 1.16699"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <RxDot />
          <RxDot />
          <RxDot />
          <RxDot />
          <button onClick={handleNext}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H12.6667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.83301 1.16699L12.6663 7.00033L6.83301 12.8337"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className={styles.section}>
        <Title title="Лучшие продавцы" />
        <section></section>
      </section>
    </section>
  );
};

export default Homepage;
