import styles from "./Categories.module.scss";
import { useState } from "react";
const Categories = () => {
  const [category, setCategory] = useState(0);
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Все</li>
      <li className={styles.item}>Искусство</li>
      <li className={styles.item}>Музыка</li>
      <li className={styles.item}>Коллекционные предметы</li>
      <li className={styles.item}>Спорт</li>
    </ul>
  );
};

export default Categories;
