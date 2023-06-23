import styles from "../FaqPage.module.scss";
import { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);

  return (
    <>
      <header
        className={styles.wrapper}
        onClick={(): void => setOpenAnswer(!openAnswer)}
      >
        <h6 className={styles.question}>{question}</h6>
        {openAnswer ? (
          <motion.span
            animate={{ rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="px-2 xl:px-0"
          >
            <FaPlus />
          </motion.span>
        ) : (
          <motion.span
            animate={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
            className="px-2 xl:px-0"
          >
            <FaPlus />
          </motion.span>
        )}
      </header>
      <AnimatePresence>
        {openAnswer && (
          <motion.p
            className={styles.answer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};

export default FaqItem;
