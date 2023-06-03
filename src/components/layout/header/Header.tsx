import Button from "../../ui/button/Button";
import Logo from "../../ui/logo/Logo";
import styles from "./Header.module.scss";
import { BiRocket, BiWallet } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Logo />
          <ol className={styles.list}>
            <li className={styles.item}>Главная</li>
            <li className={styles.item}>NFT</li>
            <li className={styles.item}>Активность</li>
            <li className={styles.item}>Комьюнити</li>
            <li className={styles.item}>Страницы</li>
            <li className={styles.item}>Контакты</li>
          </ol>
          <span className={styles.wrapper}>
            <Button text="Подключить кошелек" icon={<BiWallet />} />
          </span>
        </nav>
        <section className={styles.section}>
          <h2 className={styles.title}>
            Открывайте и собирайте экстраординарные{" "}
            <span className={styles.slug}>МОНСТРОВ</span> NFT.
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
