import styles from "../FaqPage.module.scss";
import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);

  return (
    <article
      className={styles.item}
      onClick={(): void => setOpenAnswer(!openAnswer)}
    >
      <header className={styles.wrapper}>
        <h6 className={styles.question}>{question}</h6>
        {openAnswer ? <FaMinus /> : <FaPlus />}
      </header>
      {openAnswer ? <p className={styles.answer}>{answer}</p> : ""}
    </article>
  );
};

export default FaqItem;
