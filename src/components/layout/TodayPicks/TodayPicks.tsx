import axios from "axios";
import Button from "src/components/ui/Buttons/Button";
import ButtonMore from "src/components/ui/Buttons/ButtonMore/ButtonMore";
import History from "src/components/ui/History/History";
import NftItem from "src/components/nft/NftItem/NftItem";
import styles from "./TodayPicks.module.scss";
import Title from "src/components/ui/title/Title";
import { BiData } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { NftWithUser } from "../../../ts/LiveAuction";
import Loading from "src/components/ui/Loading/Loading";

const TodayPicks: FC = () => {
  const [picks, setPicks] = useState<NftWithUser[]>([]);
  const [maxCards, setMaxCards] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchPicks = async () => {
      const response = await axios.get<NftWithUser[]>(
        "https://6454dae6a74f994b334ad4fb.mockapi.io/NFT"
      );
      setTimeout(() => {
        setIsLoading(!isLoading);
        setPicks(response.data);
      }, 1500);
    };
    fetchPicks();
  }, []);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Title title="Сегодняшние выборы" />
        <ButtonMore link="/explore" />
      </header>
      {isLoading ? (
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
      ) : (
        <Loading />
      )}
      <button
        className={maxCards === 16 ? "hidden" : styles.footer}
        onClick={() => setMaxCards((prevCount) => prevCount + 4)}
      >
        <Button text="Показать больше" icon={null} />
      </button>
    </section>
  );
};

export default TodayPicks;
