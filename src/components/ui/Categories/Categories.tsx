import styles from "./Categories.module.scss";
import { FC } from "react";
import { categoryMarket } from "src/data/Category.data";

type CategoriesProps = {
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};
const Categories: FC<CategoriesProps> = ({ category, setCategory }) => {
  return (
    <ul className={styles.list}>
      {categoryMarket.map((item) => (
        <li
          key={item.name}
          onClick={(): void => setCategory(item.id)}
          className={category === item.id ? styles.item_active : styles.item}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
