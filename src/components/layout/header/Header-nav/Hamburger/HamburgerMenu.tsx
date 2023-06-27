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
  setInitialState: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerMenu: FC<Props> = ({
  setActive,
  active,
  initialState,
  setInitialState,
}) => {
  const closeMenu = () => {
    setInitialState(!initialState);
  };

  const ref = useRef<HTMLOListElement | null>(null);

  const clickWithoutComponent = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as HTMLOListElement)) {
      setInitialState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickWithoutComponent);
    return () => {
      document.removeEventListener("mousedown", clickWithoutComponent);
    };
  }, []);

  return (
    <ol className={initialState ? styles.hamburger : "hidden"} ref={ref}>
      <li className={styles.title}>Главная</li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, nft: !active.nft })}
      >
        NFT
        <ul className={active.nft ? styles.group : "hidden"}>
          <HamburgerItem
            link="/marketplace"
            name="Маркетплейс"
            onClick={closeMenu}
          />
          <HamburgerItem link="/auction" name="Аукцион" onClick={closeMenu} />
          <HamburgerItem link="/ranking" name="Рейтинг" onClick={closeMenu} />
        </ul>
      </li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, community: !active.community })}
      >
        Комьюнити
        <ul className={active.community ? styles.group : "hidden"}>
          <HamburgerItem link="/blog" name="Блог" onClick={closeMenu} />
          <HamburgerItem
            link="/activity"
            name="Активность"
            onClick={closeMenu}
          />
        </ul>
      </li>
      <li
        className={styles.title}
        onClick={() => setActive({ ...active, contact: !active.contact })}
      >
        Контакты
        <ul className={active.contact ? styles.group : "hidden"}>
          <HamburgerItem link="/faq" name="FAQ" onClick={closeMenu} />
          <HamburgerItem link="/help" name="Центр помощи" onClick={closeMenu} />
          <HamburgerItem link="/contact" name="Связаться" onClick={closeMenu} />
        </ul>
      </li>
    </ol>
  );
};

export default HamburgerMenu;
