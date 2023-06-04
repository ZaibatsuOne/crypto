import styles from "./Homepage.module.scss";
import LiveAuction from "../../layout/LiveAuction/LiveAuction";
import BestSellers from "../../layout/BestSellers/BestSellers";
import { FC } from "react";
import TodayPicks from "../../layout/TodayPicks/TodayPicks";
import PopularCollection from "../../layout/PopularCollection/PopularCollection";

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
