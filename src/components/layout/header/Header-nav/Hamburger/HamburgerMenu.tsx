import { FC, useRef, useEffect } from "react";
import styles from "./HamburgerMenu.module.scss";
import HamburgerItem from "./HamburgerItem";

type Props = {
  setActive: React.Dispatch<
    React.SetStateAction<{
      nft: boolean;
      contact: boolean;
      community: boolean;
    }>
  >;
  active: {
    nft: boolean;
    contact: boolean;
    community: boolean;
  };
  initialState: boolean;
};

const HamburgerMenu: FC<Props> = ({ setActive, active, initialState }) => {
  const closeMenu = () => {
    !initialState;
  };

  return (
    <ol className={initialState ? styles.hamburger : "hidden"}>
      <li className={styles.title}>Главная</li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, nft: !active.nft })}
      >
        NFT
        <ul className={active.nft ? styles.group : "hidden"}>
          <HamburgerItem link="/marketplace" name="Маркетплейс" />
          <HamburgerItem link="/auction" name="Аукцион" onClick={closeMenu} />
          <HamburgerItem link="/ranking" name="Рейтинг" />
        </ul>
      </li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, community: !active.community })}
      >
        Комьюнити
        <ul className={active.community ? styles.group : "hidden"}>
          <HamburgerItem link="/blog" name="Блог" />
          <HamburgerItem link="/activity" name="Активность" />
        </ul>
      </li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, contact: !active.contact })}
      >
        Контакты
        <ul className={active.contact ? styles.group : "hidden"}>
          <HamburgerItem link="/faq" name="FAQ" />
          <HamburgerItem link="/help" name="Центр помощи" />
          <HamburgerItem link="/contact" name="Связаться" />
        </ul>
      </li>
    </ol>
  );
};

export default HamburgerMenu;
