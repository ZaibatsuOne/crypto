import Button from "src/components/ui/Buttons/Button";
import Logo from "src/components/ui/logo/Logo";
import styles from "../Header.module.scss";
import { BiWallet } from "react-icons/bi";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { navList } from "src/ts/Navigation";

const HeaderNav: FC = () => {
  const [active, setActive] = useState({
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
        <NavLink to="/explore">
          <li className={styles.item}>NFT</li>
        </NavLink>
        <NavLink to="/">
          <li className={styles.item}>Активность</li>
        </NavLink>{" "}
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
          </ul>
          {active.community ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
        <NavLink to="/">
          <li className={styles.item}>Страницы</li>
        </NavLink>
        <li
          className={styles.item}
          onClick={(): void =>
            setActive({ ...active, contact: !active.contact })
          }
        >
          Контакты
          <ul className={active.contact ? styles.dropdown : styles.hiddens}>
            <NavLink to="/faq">
              <li>FAQ</li>
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
        <Button text="Подключить кошелек" icon={<BiWallet />} />
      </span>
    </nav>
  );
};

export default HeaderNav;
