import styles from "../FaqPage.module.scss";
import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { pVariants } from "src/animation/variants";

interface IFaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<IFaqItemProps> = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);
  return (
    <motion.article
      className={styles.item}
      onClick={(): void => setOpenAnswer(!openAnswer)}
    >
      <header className={styles.wrapper}>
        <h6 className={styles.question}>{question}</h6>
        {openAnswer ? <FaMinus /> : <FaPlus />}
      </header>
      {openAnswer ? <p className={styles.answer}>{answer}</p> : null}
    </motion.article>
  );
};

export default FaqItem;
