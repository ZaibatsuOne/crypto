import styles from "../Header.module.scss";
import Button from "src/components/ui/Buttons/Button";
import { MdLibraryBooks } from "react-icons/md";
import { FC } from "react";
import { BiRocket } from "react-icons/bi";
import { easeInOut, motion } from "framer-motion";
import { sectionVariant } from "src/utils/AnimationVariants";

const HeaderHero: FC = () => {
  return (
    <div className="overflow-hidden">
      <motion.section
        className={styles.section}
        initial={"hidden"}
        animate={"visible"}
        variants={sectionVariant}
        transition={{ duration: 3, ease: easeInOut }}
      >
        <h2 className={styles.title}>
          Открывайте и собирайте экстраординарные{" "}
          <p className={styles.slug}>МОНСТРОВ</p> NFT.
        </h2>
        <p>
          Торговая площадка для коллекций персонажей-монстров,
          невзаимозаменяемые токены NFT
        </p>
        <div className={styles.buttons}>
          <Button text="Изучить" icon={<BiRocket />} link="/faq" />
          <Button
            text="Создать"
            icon={<MdLibraryBooks />}
            background="#FFF"
            borderColor="#FFF"
            color="#343444"
            link="/create"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default HeaderHero;
