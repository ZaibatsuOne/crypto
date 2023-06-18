import FaqItem from "./Faq-Item/FaqItem";
import styles from "./FaqPage.module.scss";
import { faqList } from "src/ts/FAQ";
import { FC } from "react";
import { motion } from "framer-motion";

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
          <motion.article key={item.id} whileTap={{ scale: 1.02 }}>
            <FaqItem question={item.question} answer={item.asnwer} />
          </motion.article>
        ))}
      </section>
    </section>
  );
};

export default FaqPage;
