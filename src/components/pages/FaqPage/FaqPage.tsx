import FaqItem from "./Faq-Item/FaqItem";
import styles from "./FaqPage.module.scss";
import { faqList } from "src/ts/FAQ";
import { FC, useState } from "react";

const FaqPage: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h4>Часто задаваемые вопросы</h4>
        <p className={styles.subtitle}>
          Готовы решить все ваши сомнения! Получите исчерпывающие ответы на
          часто задаваемые вопросы прямо здесь и сейчас.
        </p>
      </header>

      <section className={styles.list}>
        {faqList.map((item) => (
          <article key={item.id}>
            <FaqItem question={item.question} answer={item.asnwer} />
          </article>
        ))}
      </section>
    </section>
  );
};

export default FaqPage;
