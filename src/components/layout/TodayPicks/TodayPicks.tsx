import styles from "./TodayPicks.module.scss";
import { NftWithUser } from "../../../ts/LiveAuction";
import Title from "../../ui/title/Title";
import { useState, useEffect, FC } from "react";
import axios from "axios";
import NftItem from "../../nft/NftItem/NftItem";
import { BiData } from "react-icons/bi";
import Button from "../../ui/Buttons/Button";
import History from "../../ui/History/History";
const TodayPicks: FC = () => {
  const [picks, setPicks] = useState<NftWithUser[]>([]);
  useEffect(() => {
    const fetchPicks = async () => {
      const response = await axios.get(
        "https://api.jsonbin.io/v3/b/647b52679d312622a369d51b"
      );
      setPicks(response.data.record);
    };
    fetchPicks();
  }, [picks]);

  return (
    <section className={styles.wrapper}>
      <header>
        <Title title="Сегодняшние выборы" />
      </header>
      <section className={styles.section}>
        {picks.slice(0, 8).map((picksItem) => (
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
              bidButton={<Button text="Ставка" icon={<BiData />} />}
              history={<History />}
            />
          </article>
        ))}
      </section>
      <footer className={styles.footer}>
        <Button text="Показать больше" icon={null} />
      </footer>
    </section>
  );
};

export default TodayPicks;
