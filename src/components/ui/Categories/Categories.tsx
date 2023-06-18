import styles from "./Categories.module.scss";
import { FC } from "react";

type Category = {
  id: number;
  name: string;
};
type CategoriesProps = {
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};
const Categories: FC<CategoriesProps> = ({ category, setCategory }) => {
  const categoryList: Category[] = [
    {
      id: 0,
      name: "Все",
    },
    {
      id: 1,
      name: "Спорт",
    },
    {
      id: 2,
      name: "Исскуство",
    },
    {
      id: 3,
      name: "Музыка",
    },
    {
      id: 4,
      name: "Коллекционные",
    },
  ];
  return (
    <ul className={styles.list}>
      {categoryList.map((item) => (
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
