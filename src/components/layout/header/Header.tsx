import styles from "./Header.module.scss";
import { FC } from "react";
import Button from "../../ui/Buttons/Button";
import Logo from "../../ui/logo/Logo";
import { BiRocket, BiWallet } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Logo />
          <ol className={styles.list}>
            <NavLink to="/">
              <li className={styles.item}>Главная</li>
            </NavLink>
            <NavLink to="/">
              <li className={styles.item}>NFT</li>
            </NavLink>
            <NavLink to="/explore">
              <li className={styles.item}>Активность</li>
            </NavLink>{" "}
            <NavLink to="/">
              <li className={styles.item}>Комьюнити</li>
            </NavLink>
            <NavLink to="/">
              <li className={styles.item}>Страницы</li>
            </NavLink>
            <NavLink to="/">
              <li className={styles.item}>Контакты</li>
            </NavLink>
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
