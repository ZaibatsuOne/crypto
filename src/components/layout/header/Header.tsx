import HeaderHero from "./Header-hero/HeaderHero";
import HeaderNav from "./Header-nav/HeaderNav";
import styles from "./Header.module.scss";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__bg} />
      <div className={styles.header__grid} />

      <div className={styles.container}>
        <HeaderNav />
        <HeaderHero />
      </div>
    </header>
  );
};

export default Header;
