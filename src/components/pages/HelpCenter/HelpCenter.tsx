import Input from "src/components/ui/Input/Input";
import styles from "./HelpCenter.module.scss";
import Title from "src/components/ui/title/Title";
import { BiSearchAlt } from "react-icons/bi";
import { FC } from "react";

const HelpCenter: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Как мы можем вам помочь?" />
        <p>
          Не знаете, как начать торговать NFT? Введите свой вопрос в поисковую
          строку или выберите одну из карточек ниже.
        </p>
        <Input
          placeholder="Введите ваш вопрос здесь"
          icon={<BiSearchAlt />}
          width="600px"
        />
      </header>
    </section>
  );
};

export default HelpCenter;
