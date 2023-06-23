import FaqItem from "./Faq-Item/FaqItem";
import Section from "src/components/layout/Section/Section";
import SectionHeader from "src/components/layout/Section/SectionHeader";
import styles from "./FaqPage.module.scss";
import Title from "src/components/ui/title/Title";
import { faqList } from "src/data/Faq.data";
import { FC } from "react";
import { motion } from "framer-motion";

const FaqPage: FC = () => {
  return (
    <Section>
      <SectionHeader>
        <Title title="FAQ" />
      </SectionHeader>
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
    </Section>
  );
};

export default FaqPage;
