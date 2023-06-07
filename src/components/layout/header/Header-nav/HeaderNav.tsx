import Button from "src/components/ui/Buttons/Button";
import Logo from "src/components/ui/logo/Logo";
import styles from "../Header.module.scss";
import { BiWallet } from "react-icons/bi";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const HeaderNav: FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

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
        <NavLink to="/">
          <li className={styles.item}>Комьюнити</li>
        </NavLink>
        <NavLink to="/">
          <li className={styles.item}>Страницы</li>
        </NavLink>
        <li
          className={styles.item}
          onClick={(): void => setDropdown(!dropdown)}
        >
          Контакты
          <ul className={dropdown ? styles.dropdown : styles.hiddens}>
            <NavLink to="/faq">
              <li>FAQ</li>
            </NavLink>
            <NavLink to="/help">
              <li>Центр помощи</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Связаться</li>
            </NavLink>
          </ul>
          {dropdown ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </li>
      </ol>
      <span className={styles.wrapper}>
        <Button text="Подключить кошелек" icon={<BiWallet />} />
      </span>
    </nav>
  );
};

export default HeaderNav;
