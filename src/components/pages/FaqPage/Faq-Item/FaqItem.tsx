import styles from "../FaqPage.module.scss";
import { FC, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
interface IFaqItemProps {
  id: number;
  question: string;
  answer: string;
}

const FaqItem: FC<IFaqItemProps> = ({ id, question, answer }) => {
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);
  return (
    <article
      className={styles.item}
      onClick={() => setOpenAnswer(!openAnswer)}
      key={id}
    >
      <header className={styles.wrapper}>
        <h6 className={styles.question}>{question}</h6>
        {openAnswer ? <FaMinus /> : <FaPlus />}
      </header>
      {openAnswer ? <p className={styles.answer}>{answer}</p> : null}
    </article>
  );
};

export default FaqItem;
