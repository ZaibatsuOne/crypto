import styles from "./Sort.module.scss";
import { FC, useState } from "react";
const Sort: FC = () => {
  const [chooseSort, setChooseSort] = useState("Сортировать");
  const [visible, setVisible] = useState<any>(false);
  const sort: string[] = [
    "Все",
    "Максимальная ставка",
    "Средняя ставка",
    "Низкая ставка",
  ];
  return (
    <div className={styles.wrapper}>
      <span className={styles.sortType} onClick={() => setVisible(!visible)}>
        {chooseSort}
      </span>
      <ol className={visible ? styles.list : "hidden"}>
        {sort.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => {
              setChooseSort(item), setVisible(!visible);
            }}
          >
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sort;
