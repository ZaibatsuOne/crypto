import styles from "./Categories.module.scss";
import { useState, FC } from "react";

interface ICategory {
  chooseIndex: number | null;
  setChooseIndex: any;
}
type TypeCategory = {
  name: string;
  category: number | null;
};
const Categories: FC<ICategory> = ({ chooseIndex, setChooseIndex }) => {
  const categories: TypeCategory[] = [
    {
      name: "Все",
      category: null,
    },
    {
      name: "Исскуство",
      category: 2,
    },
    {
      name: "Музыка",
      category: 3,
    },
    {
      name: "Коллекционные карточки",
      category: 4,
    },
    {
      name: "Спорт",
      category: 5,
    },
  ];

  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <li
          key={item.category}
          onClick={() => {
            setChooseIndex(item.category), console.log(chooseIndex);
          }}
          className={
            chooseIndex === item.category ? styles.item_active : styles.item
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
