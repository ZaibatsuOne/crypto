import BestSellers from "../../layout/BestSellers/BestSellers";
import LiveAuction from "../../layout/LiveAuction/LiveAuction";
import PopularCollection from "../../layout/PopularCollection/PopularCollection";
import styles from "./Homepage.module.scss";
import TodayPicks from "../../layout/TodayPicks/TodayPicks";
import { FC } from "react";

const Homepage: FC = () => {
  return (
    <section className={styles.homepage}>
      <LiveAuction />
      <BestSellers />
      <TodayPicks />
      <PopularCollection />
    </section>
  );
};

export default Homepage;
