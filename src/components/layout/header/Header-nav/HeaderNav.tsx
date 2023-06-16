import Button from "src/components/ui/Buttons/Button";
import Logo from "src/components/ui/logo/Logo";
import styles from "../Header.module.scss";
import { BiWallet } from "react-icons/bi";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const HeaderNav: FC = () => {
  const [active, setActive] = useState({
    nft: false,
    contact: false,
    community: false,
  });
  return (
    <nav className={styles.nav}>
      <Logo />
      <ol className={styles.list}>
        <NavLink to="/">
          <li className={styles.item}>Главная</li>
        </NavLink>
        <li
          className={styles.item}
          onClick={() => setActive({ ...active, nft: !active.nft })}
        >
          NFT
          <ul className={active.nft ? styles.dropdown : styles.hiddens}>
            <NavLink to="/marketplace">
              <li className={styles.dropdown__item}>Маркетплейс</li>
            </NavLink>
            <NavLink to="/auction">
              <li className={styles.dropdown__item}>Аукцион</li>
            </NavLink>
          </ul>
          {active.nft ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
        <li
          className={styles.item}
          onClick={(): void =>
            setActive({ ...active, community: !active.community })
          }
        >
          Комьюнити
          <ul className={active.community ? styles.dropdown : styles.hiddens}>
            <NavLink to="/blog">
              <li className={styles.dropdown__item}>Блог</li>
            </NavLink>
            <NavLink to="/activity">
              <li className={styles.dropdown__item}>Активность</li>
            </NavLink>
          </ul>
          {active.community ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
        <li
          className={styles.item}
          onClick={(): void =>
            setActive({ ...active, contact: !active.contact })
          }
        >
          Контакты
          <ul className={active.contact ? styles.dropdown : styles.hiddens}>
            <NavLink to="/faq">
              <li className={styles.dropdown__item}>FAQ</li>
            </NavLink>
            <NavLink to="/help">
              <li className={styles.dropdown__item}>Центр помощи</li>
            </NavLink>
            <NavLink to="/contact">
              <li className={styles.dropdown__item}>Связаться</li>
            </NavLink>
          </ul>
          {active.contact ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
      </ol>
      <span className={styles.wrapper}>
        <Button text="Подключить кошелек" icon={<BiWallet />} link="/connect" />
      </span>
    </nav>
  );
};

export default HeaderNav;
