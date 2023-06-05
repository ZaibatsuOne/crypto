import styles from "./TodayPicks.module.scss";
import { NftWithUser } from "../../../ts/LiveAuction";
import Title from "../../ui/title/Title";
import { useState, useEffect, FC } from "react";
import axios from "axios";
import NftItem from "../../nft/NftItem/NftItem";
import { BiData } from "react-icons/bi";
import Button from "../../ui/Buttons/Button";
import History from "../../ui/History/History";
import ButtonMore from "../../ui/Buttons/ButtonMore/ButtonMore";
const TodayPicks: FC = () => {
  const [picks, setPicks] = useState<NftWithUser[]>([]);
  const [maxCards, setMaxCards] = useState<number>(8);
  useEffect(() => {
    const fetchPicks = async () => {
      const response = await axios.get<NftWithUser[]>(
        "https://6454dae6a74f994b334ad4fb.mockapi.io/NFT"
      );
      setPicks(response.data);
    };
    fetchPicks();
  }, [picks]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Title title="Сегодняшние выборы" />
        <ButtonMore link="/explore" />
      </header>
      <section className={styles.section}>
        {picks.slice(0, maxCards).map((picksItem) => (
          <article key={picksItem.id}>
            <NftItem
              id={picksItem.id}
              img={picksItem.img}
              title={picksItem.title}
              net={picksItem.net}
              userName={picksItem.userName}
              userAvatar={picksItem.userAvatar}
              userType={picksItem.userType}
              price={picksItem.price}
              category={picksItem.category}
              bidButton={<Button text="Ставка" icon={<BiData />} />}
              history={<History />}
            />
          </article>
        ))}
      </section>
      <button
        className={styles.footer}
        onClick={() => setMaxCards((prevCount) => prevCount + 4)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};

export default TodayPicks;
