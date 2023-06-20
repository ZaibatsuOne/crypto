import FaqItem from "./Faq-Item/FaqItem";
import styles from "./FaqPage.module.scss";
import { faqList } from "src/data/Faq.data";
import { FC } from "react";
import { motion } from "framer-motion";
import Title from "src/components/ui/title/Title";

const FaqPage: FC = () => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Title title="FAQ" />
        <p className={styles.subtitle}>
          Готовы решить все ваши сомнения! Получите исчерпывающие ответы на
          часто задаваемые вопросы прямо здесь и сейчас.
        </p>
      </header>
      <div className={styles.line} />
      <section className={styles.list}>
        {faqList.map((item) => (
          <motion.article
            key={item.id}
            transition={{ duration: 3 }}
            whileTap={{ scale: 1.02 }}
            className={styles.item}
          >
            <FaqItem question={item.question} answer={item.asnwer} />
            <div className={styles.line} />
          </motion.article>
        ))}
      </section>
    </section>
  );
};

export default FaqPage;
