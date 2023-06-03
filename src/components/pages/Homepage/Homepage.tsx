import styles from "./Homepage.module.scss";
import LiveAuction from "../../layout/liveAuction/LiveAuction";
import BestSellers from "../../layout/bestSellers/BestSellers";
import { FC } from "react";

const Homepage: FC = () => {
  return (
    <section className={styles.homepage}>
      <LiveAuction />
      <BestSellers />
    </section>
  );
};

export default Homepage;
