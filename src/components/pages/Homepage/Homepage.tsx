import styles from "./Homepage.module.scss";
import LiveAuction from "../../layout/liveAuction/LiveAuction";
import BestSellers from "../../layout/bestSellers/BestSellers";

const Homepage = () => {
  return (
    <section className={styles.homepage}>
      <LiveAuction />
      <BestSellers />
    </section>
  );
};

export default Homepage;
