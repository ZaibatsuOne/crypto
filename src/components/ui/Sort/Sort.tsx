import styles from "./Sort.module.scss";
import { FC, useState } from "react";
import { motion } from "framer-motion";

type Sort = {
  name: string;
  sortProperty: string;
};
type SortProps = {
  sort: string;
  setSort: React.Dispatch<
    React.SetStateAction<{
      name: string;
      sortProperty: string;
    }>
  >;
};

const Sort: FC<SortProps> = ({ sort, setSort }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const sortList: Sort[] = [
    {
      sortProperty: "id",
      name: "Все",
    },
    {
      sortProperty: "price",
      name: "По возрастанию",
    },
    {
      sortProperty: "-price",
      name: "По убыванию",
    },
    {
      sortProperty: "title",
      name: "По названию",
    },
  ];

  const onClickSort = (i: any) => {
    setSort(i);
    setVisible(!visible);
  };

  return (
    <div className={styles.wrapper}>
      <span onClick={() => setVisible(!visible)} className={styles.subject}>
        {sort}
      </span>
      <ul className={visible ? styles.list : "hidden"}>
        {sortList.map((item) => (
          <motion.li
            className={styles.item}
            key={item.name}
            whileHover={{ backgroundColor: "#5142FC" }}
            onClick={(): void => onClickSort(item)}
          >
            {item.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
