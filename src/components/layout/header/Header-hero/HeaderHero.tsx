import styles from "../Header.module.scss";
import Button from "src/components/ui/Buttons/Button";
import { MdLibraryBooks } from "react-icons/md";
import { FC } from "react";
import { BiRocket } from "react-icons/bi";

const HeaderHero: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Открывайте и собирайте экстраординарные{" "}
        <p className={styles.slug}>МОНСТРОВ</p> NFT.
      </h2>
      <p>
        Торговая площадка для коллекций персонажей-монстров, невзаимозаменяемые
        токены NFT
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
  );
};

export default HeaderHero;
