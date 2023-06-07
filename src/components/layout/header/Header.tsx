import Button from "src/components/ui/Buttons/Button";
import Logo from "src/components/ui/logo/Logo";
import styles from "./Header.module.scss";
import { BiRocket, BiWallet } from "react-icons/bi";
import { FC, useState } from "react";
import { MdLibraryBooks } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Header: FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
              </ul>
            </li>
          </ol>
          <span className={styles.wrapper}>
            <Button text="Подключить кошелек" icon={<BiWallet />} />
          </span>
        </nav>
        <section className={styles.section}>
          <h2 className={styles.title}>
            Открывайте и собирайте экстраординарные{" "}
            <p className={styles.slug}>МОНСТРОВ</p> NFT.
          </h2>
          <p>
            Торговая площадка для коллекций персонажей-монстров,
            невзаимозаменяемые токены NFT
          </p>
          <div className={styles.buttons}>
            <Button text="Изучить" icon={<BiRocket />} />
            <Button
              text="Создать"
              icon={<MdLibraryBooks />}
              background="#FFF"
              borderColor="#FFF"
              color="#343444"
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
