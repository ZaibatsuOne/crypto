import styles from "./Sort.module.scss";
import { FC, useState } from "react";

interface ISortProps {
  chooseSort: number | null | string;
  setChooseSort: any;
}
const Sort: FC<ISortProps> = ({ chooseSort, setChooseSort }) => {
  const [visible, setVisible] = useState<any>(false);
  const sort = [
    {
      id: null,
      name: "Все",
    },
    {
      id: 1,
      name: "Максимальная ставка",
    },
    {
      id: 2,
      name: "Средняя ставка",
    },
    {
      id: 3,
      name: "Низкая ставка",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <span className={styles.sortType} onClick={() => setVisible(!visible)}>
        {chooseSort === null ? "Сортировка" : chooseSort}
      </span>
      <ol className={visible ? styles.list : "hidden"}>
        {sort.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => {
              setChooseSort(item.name), setVisible(!visible);
            }}
          >
            {item.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sort;
