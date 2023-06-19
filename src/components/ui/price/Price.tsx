import styles from "./Price.module.scss";
import { FC } from "react";

type TypePriceProps = {
  price: number;
};
const Price: FC<TypePriceProps> = ({ price }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Ставка</p>
      <div className="flex gap-1 items-center">
        <span className={styles.price}>{price}</span>
        <p className="text-lg font-bold">ETH</p>
      </div>
    </div>
  );
};

export default Price;
