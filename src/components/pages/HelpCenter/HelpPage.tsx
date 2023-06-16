import HelpPageCategory from "./HelpPage-category/HelpPageCategory";
import Input from "src/components/ui/Input/Input";
import styles from "./HelpPage.module.scss";
import Title from "src/components/ui/title/Title";
import { BiSearchAlt } from "react-icons/bi";
import { FC, useState } from "react";
import { helpCategory } from "src/ts/HelpCategory";

const HelpPage: FC = () => {
  const [inp, setInp] = useState<string>("");
  const handleInp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInp(event.target.value);
  };
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="Как мы можем вам помочь?" />
        <p className={styles.subtitle}>
          Не знаете, как начать торговать NFT? Введите свой вопрос в поисковую
          строку или выберите одну из карточек ниже.
        </p>
        <Input
          placeholder="Введите ваш вопрос здесь"
          icon={<BiSearchAlt />}
          width="600px"
          onChange={handleInp}
        />
        <p className={styles.subtitle}>
          Или выберите категорию, чтобы быстро найти необходимую помощь
        </p>
      </header>
      <section className={styles.wrapper}>
        {helpCategory
          .filter((item) =>
            item.title.toLocaleLowerCase().includes(inp.toLowerCase())
          )
          .map((item) => (
            <section className={styles.category} key={item.id}>
              <HelpPageCategory
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </section>
          ))}
      </section>
    </section>
  );
};

export default HelpPage;
