import styles from "./Categories.module.scss";
import { useState, FC } from "react";
const Categories: FC = () => {
  const [chooseIndex, setChooseIndex] = useState<number>(0);
  const categories: string[] = [
    "Все",
    "Искусство",
    "Музыка",
    "Коллекционные предметы",
    "Спорт",
  ];
  return (
    <ul className={styles.list}>
      {categories.map((item, index) => (
        <li
          key={index}
          onClick={(): void => setChooseIndex(index)}
          className={chooseIndex === index ? styles.item_active : styles.item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
